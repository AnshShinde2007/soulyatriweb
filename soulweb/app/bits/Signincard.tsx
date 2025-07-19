"use client";

import React, { useState } from "react";
import Cookies from "js-cookie";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const SigninCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (!response.ok) {
        throw new Error(data.detail || "Invalid credentials");
      }

      // const { user, access_token } = data;

      // // Store info in cookies
      // Cookies.set("email", user.email, { path: "/" });
      // Cookies.set("role", user.role, { path: "/" });
      // Cookies.set("id", user.id, { path: "/" });
      // Cookies.set("token", access_token, { path: "/" }); // optional

      // Redirect by role
      // if (user.role === "admin") {
      //   window.location.href = "/admin/dashboard";
      // } else if (user.role === "therapist") {
      //   window.location.href = "/therapist/dashboard";
      // } else {
      //   window.location.href = "/user/dashboard";
      // }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm mx-auto mt-12">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] bg-clip-text text-transparent">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-gray-600 text-base md:text-lg mt-2">
          Continue your healing journey where you left off
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 md:px-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className="text-gray-700 font-medium text-sm md:text-base"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label
              htmlFor="password"
              className="text-gray-700 font-medium text-sm md:text-base"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <CardFooter className="flex-col gap-3 px-0 pt-4">
            <Button
              type="submit"
              className="w-full h-10 md:h-11 bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue Your Journey
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default SigninCard;
