import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function FeatureCard() {
  return (
    <Card className="w-sm rounded-3xl border border-slate-300 bg-gradient-to-br from-slate-200 dark:from-slate-500 dark:to-cyan-700 to-cyan-100 shadow-sm">
      <CardContent className="p-6 space-y-8">

        {/* Icon Box */}
        <div className="w-12 h-12 rounded-xl bg-slate-300 flex items-center justify-center dark:bg-black">
          <Users className="w-6 h-6" />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Smart Recruitment
          </h3>

          <p className="text-muted-foreground text-lg leading-8">
            Post jobs, screen candidates, and manage the
            entire hiring process with intelligent matching.
          </p>
        </div>

      </CardContent>
    </Card>
  )
}