import React from 'react'

interface DogIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

export function DogIcon({ size = 36, v1, v2, v3 }:DogIconProps) {
    return (
        <span
            role="img"
            style={{
            fontSize: size,
            filter: v1 ? 'saturate(0.5)' : undefined,
            }}
        >
            🐕
        </span>
    )
}

