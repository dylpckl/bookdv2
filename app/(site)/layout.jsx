"use client";
import "./globals.css";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Provider from "./provider";
import SignInButton from './SignInButton'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Provider>
          <nav className="w-full bg-slate-500 flex gap-8">
            <Link href='/clubs'>Clubs</Link>
            <SignInButton />
          </nav>

          <div className="bg-gray-300 p-8">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
