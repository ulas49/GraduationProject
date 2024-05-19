"use client"
import {useState} from 'react'
import { CloseRounded, Visibility, VisibilityOff } from "@mui/icons-material";


const TextInput = ({label,
    placeholder,
    name,
    value,
    error,
    handelChange,
    textArea,
    rows,
    columns,
    chipableInput,
    chipableArray,
    removeChip,
    height,
    small,
    popup,
    password}) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`flex flex-1 flex-col gap-[6px] `}>
    <label  className={`text-[12px] text-[#404040] py-0 px-1 ${error && "text-[#ef5350]"} ${small && "text-[8px]"} ${popup && "text-[#b1b2b3]"}`}>
      {label}
    </label>
    <div
      popup={popup}
      className={`buttonOutlinedInput ${error && "border-[#ef5350]"} ${chipableInput && `bg-[#FFFFFF] flex-col items-start gap-2 min-h-[${height}]`}  ${small && "rounded-[6px] py-2 px-[10px]"} ${popup && "text-[#b1b2b3] border-[0.5px] border-solid border-[#909daa]"}`}
    >
      {chipableInput ? (
        <div className={`flex flex-wrap gap-[6px]`}>
          {chipableArray.map((chip, index) => (
            <div key={index} className={`textChipComp`}>
              <span>{chip}</span>
              <CloseRounded
                sx={{ fontSize: "14px" }}
                onClick={() => removeChip(name, index)}
              />
            </div>
          ))}
          <input
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => handelChange(e)}
          />
        </div>
      ) : (
        <>{textArea ? ( <textarea
            className={`textInputComp ${small && "text-[12px]"} ${popup && "text-[#b1b2b3]"}`}
            name={name}
            rows={rows}
            columns={columns}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handelChange(e)}
            type={password && !showPassword ? "password" : "text"}
          />) : ( <input
            className={`textInputComp ${small && "text-[12px]"} ${popup && "text-[#b1b2b3]"}`}
            name={name}
            rows={rows}
            columns={columns}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handelChange(e)}
            type={password && !showPassword ? "password" : "text"}
          />)}
         
          {password && (
            <>
              {showPassword ? (
                <>
                  <Visibility onClick={() => setShowPassword(false)} />
                </>
              ) : (
                <>
                  <VisibilityOff onClick={() => setShowPassword(true)} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
    {error && (
      <p  className={`text-[12px] my-0 mx-2 text-[#ef5350] ${small && "text-[8px]"}`}>
        {error}
      </p>
    )}
  </div>
  )
}

export default TextInput
