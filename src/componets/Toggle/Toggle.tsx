import React from "react";
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function MyToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    // <Switch
    //   defaultChecked={false} 
    //   onChange={setEnabled}
    //   // className={`${
    //   //   enabled ? 'bg-blue-600' : 'bg-gray-200'
    //   // } relative inline-flex h-6 w-11 items-center rounded-full`}
    // >
    //           {({ checked }) => (
    //       <button
    //         className={`${
    //           checked ? 'bg-blue-600' : 'bg-gray-200'
    //         } relative inline-flex h-6 w-11 items-center rounded-full`}
    //       ></button>
      
    //   <span
    //     className={`${
    //       enabled ? 'translate-x-6' : 'translate-x-1'
    //     } inline-block h-4 w-4 transform rounded-full bg-white transition`}
    //   />
    // </Switch>
    <Switch name="terms-of-service" defaultChecked={false} >
        {({ checked }) => (
          <button
            className={`${
              checked ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                checked ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </button>
        )}
      </Switch>
  )
}

export default MyToggle;