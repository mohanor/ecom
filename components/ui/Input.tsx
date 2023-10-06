import { type } from "os"
import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    id: string
    componentType?: "input" | "textarea"
    className?: string
}


export default function Input({ label, id, componentType = 'input', className = '', ...rest }: Props) {

    if (componentType === 'textarea') {

        return (
            <div className="space-y-2 w-full">
                <label htmlFor={id} className="text-sm">{label}</label>
                <textarea id={id} className={twMerge('border block outline-none pl-2 py-4 rounded-md border-gray-light-500 w-full', className)} />
            </div>
        )
    }

    return (
        <div className="space-y-2 w-full">
            <label htmlFor={id} className="text-sm">{label}</label>
            <input id={id} {...rest} className={twMerge('border block outline-none pl-2 py-4 rounded-md border-gray-light-500 w-full', className)} />
        </div>
    )
}