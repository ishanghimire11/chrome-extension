import React, { useContext } from "react";
import { Switch } from '@headlessui/react'
import { usePasswordContext } from "../context/PasswordContext";

function MyToggle({index}) {
  const {toggleStates, handleToggleChange} = usePasswordContext();
  const enabled = toggleStates[`${index}`]

  const handleToggleSwitch = () => {
    return handleToggleChange(`${index}`, !enabled)
  };

  return (
    <Switch
      checked = {true}
      onChange={handleToggleSwitch}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-400'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300`}
      />
    </Switch>
  )
}

export default MyToggle;