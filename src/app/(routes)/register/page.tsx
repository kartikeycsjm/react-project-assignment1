"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target

    if (type === "radio") {
      setFormData({
        ...formData,
        isAgency: value === "yes",
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //nothing
    router.push("/account")
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Create your
            <br />
            PopX account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-purple-600 text-sm
                relative bg-white top-3 p-1
                left-2 w-[115px]">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Marry Doe"
                required
              />
            </div>

            <div>
              <label className="
              relative bg-white top-3 p-1
              left-2 w-[115px]
              block text-purple-600 text-sm">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Marry Doe"
                required
              />
            </div>

            <div>
              <label className="
              relative bg-white top-3 p-1
              left-2 w-[115px]
              block text-purple-600 text-sm">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Marry Doe"
                required
              />
            </div>

            <div>
              <label className="
              relative bg-white top-3 p-1
              left-2 w-[115px]
              block text-purple-600 text-sm">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Marry Doe"
                required
              />
            </div>

            <div>
              <label className="
              relative bg-white top-3 p-1
              left-2 w-[120px]
              block text-purple-600 text-sm">Company name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Marry Doe"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 mb-2">
                Are you an Agency?<span className="text-red-500">*</span>
              </p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency}
                    onChange={handleChange}
                    className="w-5 h-5 text-purple-600 mr-2"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={!formData.isAgency}
                    onChange={handleChange}
                    className="w-5 h-5 text-purple-600 mr-2"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-purple-600 text-white text-center font-medium rounded-md"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
