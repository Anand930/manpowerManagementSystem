import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAcessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("Error occured while generating tokens ", error);
    return null
  }
};

const registerUser = async (req, res) => {
  try {
    const { fullname, username, email, password, phone, role } = req.body;
    if ([fullname, username, email, password, phone, role].some((field)=>field?.trim()==="")){
      return res.status(404).json({ message: "all field are compulsory" });
    }
    // console.log("File ", req.files);
    // console.log("api key",process.env.CLOUDINARY_API_KEY);
    

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    // checking if user already exists
    if (existingUser) {
      return res
        .status(500)
        .json({ message: "user already exists with given credentials" });
    }

    const profileImageLocalPath = req.files?.profileImage[0]?.path; //local file path of the uploaded profile Image
    console.log("profile image local path ", profileImageLocalPath);
    

    if (!profileImageLocalPath) {
      return res
        .status(500)
        .json({ meassage: "profileImage local file path not found" });
    }

    const profileImage = await uploadOnCloudinary(profileImageLocalPath);
    console.log("profileImage",profileImage);
    
    

    if (!profileImage) {
      return res.status(400).json({ message: "profile Image is not found" });
    }

    const user = await User.create({
      fullname,
      username,
      email,
      password,
      phone,
      role,
      profileImage: profileImage?.url,
    });
    
  
    

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken",
    );

    

    return res
      .status(201)
      .json({ message: "user is created successfully ", createdUser });
  } catch (error) {
    console.log("Something went wrong while creating user ", error);
    return res
      .status(500)
      .json({ message: "something went wrong while creating the user" });
  }
};

const loginUser = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { usernameOrEmail, password } = req.body;

    
    
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    console.log("user ",user);
    

    if (!user) {
      return res
        .status(404)
        .json({ message: "user with given username or email not exists" });
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password); // checking whether the password is correct or not
    if (!isPasswordCorrect) {
      return res.status(500).json({ message: "wrong password" });
    }

    const { accessToken, refreshToken } = await generateAcessAndRefreshToken(
      user._id
    );
    if(!accessToken ||!refreshToken){
      return res.status(500).json({message:"issue in generating tokens"})
    }

    

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken",
    );
    console.log("loggedIn user ", loggedInUser);
    

    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "user loggedin successfully ",
        user: loggedInUser,
        accessToken
      });
  } catch (error) {
    console.log("Something went wrong while loggedIn the user");
    return res.status(500).json({message:error.message})
  }
};


export {registerUser, loginUser}