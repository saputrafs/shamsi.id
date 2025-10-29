'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },

];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="relative bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                alt="Logo"
                src="logo.png?color=indigo&shade=900"
                className="h-12 w-auto"
              />
              {/* <span className="text-lg font-semibold text-gray-900">EduSystem</span> */}
            </a>
          </div>

          {/* Tombol menu mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>

          {/* Menu desktop */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
            >
              Log in
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
                <span className="font-semibold text-gray-900">EduSystem</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>

            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="block rounded-lg bg-indigo-600 px-3 py-2.5 text-center font-semibold text-white hover:bg-indigo-500"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
