import React, { useState, useEffect, useRef } from "react";
import "./styles.css"
// Определение типов для опций и пропсов
interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
    onChange: (selectedOption: Option) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
                                                       options,
                                                       placeholder = "Select an option",
                                                       onChange,
                                                   }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    // Обработчик выбора элемента
    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    // Закрытие выпадающего списка при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="custom-select" ref={selectRef}>
            <div
                className="custom-select__trigger"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {selectedOption ? selectedOption.label : placeholder}
                <span className="custom-select__arrow">&#9662;</span>
            </div>
            {isOpen && (
                <div className="custom-select__dropdown">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`custom-select__option ${
                                selectedOption?.value === option.value ? "selected" : ""
                            }`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
