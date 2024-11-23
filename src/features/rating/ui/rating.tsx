import React from 'react'
import { Star } from 'lucide-react'

interface RatingProps {
  value: number
  onChange: (newValue: number) => void
}

export function Rating({ value, onChange }: RatingProps) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 cursor-pointer ${star <= value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          onClick={() => onChange(star)}
        />
      ))}
    </div>
  )
}

