import React from 'react'
import { Building2, Users, Star } from 'lucide-react'

const statsData = [
  {
    id: 1,
    icon: <Building2 size={30} />,
    number: '500+',
    text: 'Companies using WorkFlow',
    border: 'border-blue-300',
    bg: 'from-blue-50 to-cyan-50',
    iconBg: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
  {
    id: 2,
    icon: <Users size={30} />,
    number: '50K+',
    text: 'Employees managed on the platform',
    border: 'border-green-300',
    bg: 'from-green-50 to-emerald-50',
    iconBg: 'bg-green-100',
    textColor: 'text-green-600',
  },
  {
    id: 3,
    icon: <Star size={30} />,
    number: '98%',
    text: 'Customer satisfaction rate',
    border: 'border-orange-300',
    bg: 'from-orange-50 to-pink-50',
    iconBg: 'bg-orange-100',
    textColor: 'text-orange-600',
  },
  {
    id: 4,
    icon: <Star size={30} />,
    number: '98%',
    text: 'Customer satisfaction rate',
    border: 'border-orange-300',
    bg: 'from-orange-50 to-pink-50',
    iconBg: 'bg-orange-100',
    textColor: 'text-orange-600',
  },
]

const StatsCards = () => {
  return (
    <div className="w-full space-y-6 ">
      {statsData.map((item) => (
        <div
          key={item.id}
          className={`
            flex items-center gap-6
            rounded-3xl border
            ${item.border}
            bg-gradient-to-r ${item.bg}
            p-4
          `}
        >
          {/* Icon */}
          <div
            className={`
              ${item.iconBg}
              ${item.textColor}
              rounded-full
              p-6
            `}
          >
            {item.icon}
          </div>

          {/* Line */}
          <div className="h-24 w-[1px] bg-gray-300"></div>

          {/* Text */}
          <div>
            <h1 className={`text-2xl font-bold ${item.textColor}`}>
              {item.number}
            </h1>

            <p className="mt-3 text-xl text-gray-600">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards