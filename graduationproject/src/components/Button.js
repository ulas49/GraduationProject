import React from 'react'
import { CircularProgress } from "@mui/material";


const Button = ({
    text,
    isLoading,
    isDisabled,
    rightIcon,
    leftIcon,
    type,
    onClick,
    flex,
    small,
    outlined,
    full
  }) => {
  return (
    <button
    className={`buttonComp sm:py-4 sm:px-[26px] py-2 px-3 ${type === "secondary" ? "bg-[#5B86E5] border border-solid border-[#5B86E5]" : " bg-[#007AFF]"} ${isDisabled && "opacity-80 cursor-not-allowed"} ${isLoading && "opacity-80 cursor-not-allowed"} ${flex && "flex-1"}  ${small && "py-[10px] px-[28px]"}  ${outlined && "bg-transparent text-[#007AFF] shadow-none"} ${full && "w-full"}`}
    onClick={() => !isDisabled && !isLoading && onClick()}
    isDisabled={isDisabled}
    type={type}
    isLoading={isLoading}
    flex={flex}
    small={small}
    outlined={outlined}
    full={full}
  >
    {isLoading && (
      <CircularProgress
        style={{ width: "18px", height: "18px", color: "inherit" }}
      />
    )}
    {leftIcon}
    {text}
    {isLoading && <> . . .</>}
    {rightIcon}
  </button>
  )
}

export default Button
