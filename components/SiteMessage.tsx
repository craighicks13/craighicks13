import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { IoAlertCircleOutline } from 'react-icons/io5'

interface Props {
    title: JSX.Element | string
    message: JSX.Element | string
    display: boolean
    isError: boolean
    closeWindow?: any
}

export default function SiteMessage({ display, title, message, isError, closeWindow }: Props) {

  return (
    <>

      <Transition appear show={display} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeWindow}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`${isError ? 'text-red-500' : 'text-gray-900'} flex items-center gap-2 text-2xl font-medium leading-6`} 
                  >
                    {isError && <IoAlertCircleOutline className="text-red-500" />}
                    {title}
                  </Dialog.Title>
                  <div className="mt-10">
                    <p className="text-sm text-gray-500">
                       {message}
                    </p>
                  </div>

                  <div className="mt-10">
                    <button
                      type="button"
                      className={`${isError ? 'bg-red-500 text-white hover:bg-red-800' : 'bg-blue-100 text-blue-900 hover:bg-blue-200'} inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={closeWindow}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
