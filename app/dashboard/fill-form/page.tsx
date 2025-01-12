'use client'


import React from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { userSchema, UserFormValues } from '../../../utils/validator'

// shadCN
import { Button } from '../../components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { toast } from "sonner"





const page = () => {

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',         
      email: '',        
      password: '',     
      role: '',         
      salary: 0,        
      experience: 'Fresher', 
    },
  })


  // handle form submit 
  const onSubmit = async (data: UserFormValues) => {
    try {
      console.log("data = ", data)
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("responseData = ", responseData);
      if (response.ok) {
        toast.success("User has been created.")
        form.reset()
      } else {
        toast.error(responseData.error)
      }
    } catch (error) {
      console.error('Error while adding user:', error);
    }
  };


  return (
    <div className='p-5 text-white  '>
      <h1 className='text-3xl font-bold text-green-500 text-center md:text-left'>
        Create New User
      </h1>



      <div className='flex flex-col min-h-screen mt-5 '>
        <div className='bg-slate-800 h-full w-[60% p-4 py-9 md:p-9 rounded-xl'>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
              {/* name  */}
              <div className='flex flex-col gap-5 md:flex-row'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className='input-field placeholder:text-slate-300' />
                      </FormControl>
                      <FormMessage className='text-red-500 font-medium' />
                    </FormItem>
                  )}
                />
              </div>


              {/* email  */}
              <div className='flex flex-col md:flex-row gap-5 '>
                <div className='w-full flex flex-col gap-5 md:flex-row'>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormControl>
                          <Input placeholder="Enter your Email" {...field} className='input-field placeholder:text-slate-300' />
                        </FormControl>
                        <FormMessage className='text-red-500 font-medium' />
                      </FormItem>
                    )}
                  />
                </div>

                {/* password  */}
                <div className='w-full flex flex-col gap-5 md:flex-row'>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormControl>
                          <Input placeholder="your password" {...field} className='input-field placeholder:text-slate-300' />
                        </FormControl>
                        <FormMessage className='text-red-500 font-medium' />
                      </FormItem>
                    )}
                  />
                </div>
              </div>


              {/* role  */}
              <div className='flex gap-5 justify-between items-center'>
                <div className='w-full flex flex-col gap-5 md:flex-row'>
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormControl>
                          <Input placeholder="your role" {...field} className='input-field placeholder:text-slate-300' />
                        </FormControl>
                        <FormMessage className='text-red-500 font-medium' />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Experience  */}
                <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Fresher">Fresher</SelectItem>
                              <SelectItem value="Experienced">Experienced</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className='text-red-500 font-medium' />
                      </FormItem>
                    )}
                  />
                </div>

              </div>


              {/* salary  */}
              <div className='flex flex-col gap-5 md:flex-row'>
                <FormField
                  control={form.control}
                  name="salary"
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input placeholder="Enter your salary" {...field} className='input-field placeholder:text-slate-300' />
                      </FormControl>
                      <FormMessage className='text-red-500 font-medium' />
                    </FormItem>
                  )}
                />
              </div>


              {/* submut button */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className='bg-green-500 hover:bg-green-600 p-3 rounded-xl font-bold w-full'
              >
                {form.formState.isSubmitting ? "loading" : "Submit"}
              </Button>

            </form>
          </Form>

        </div>
      </div>


    </div>
  )
}

export default page