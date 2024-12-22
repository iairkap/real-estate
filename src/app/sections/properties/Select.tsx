import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FilterSelectProps {
    placeholder: string;
    options: { label: string; value: string }[];
    icon: string;
    onValueChange: (value: string | null) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
    placeholder,
    options,
    icon,
    onValueChange,
}) => (
    <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-[100%]" ICON={icon}>
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            {options.map(({ label, value }, index) => (
                <SelectItem key={index} value={value}>
                    {label}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
);

export default FilterSelect;