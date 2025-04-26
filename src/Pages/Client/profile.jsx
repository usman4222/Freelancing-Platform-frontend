import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from 'lucide-react'
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  logoImage: z.string().min(1, "Logo image is required"),
  employerName: z.string().min(2, "Employer name must be at least 2 characters"),
  profileUrl: z.string().url("Please enter a valid URL"),
  categories: z.string().min(1, "Please select at least one category"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string().url("Please enter a valid website URL").optional(),
  whatsappNumber: z.string().min(10, "Please enter a valid phone number"),
  foundedDate: z.date({
    required_error: "Please select a date",
  }),
  employees: z.string().min(1, "Please select number of employees"),
  country: z.string().min(1, "Please select a location"),
  state: z.string().min(1, "Please select a state"),
  friendlyAddress: z.string().min(1, "Please enter your address"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  gallery: z.string().optional(),
  videoUrl: z.string().url("Please enter a valid video URL").optional(),
  instagramUrl: z.string().url("Please enter a valid Instagram URL").optional().or(z.literal('')),
  facebookUrl: z.string().url("Please enter a valid Facebook URL").optional().or(z.literal('')),
  linkedinUrl: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal('')),
  twitterUrl: z.string().url("Please enter a valid Twitter URL").optional().or(z.literal('')),
})

const categories = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Graphic Design" },
  { id: 3, name: "Content Writing" },
  { id: 4, name: "Digital Marketing" },
  { id: 5, name: "Data Science" },
]

function EditProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logoImage: "",
      employerName: "",
      profileUrl: "",
      email: "",
      website: "",
      country:"",
      state:"",
      whatsappNumber: "",
      friendlyAddress: "",
      description: "",
      videoUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      linkedinUrl: "",
      twitterUrl: "",
    },
  })

  const onSubmit = (data) => {
    console.log("All form data:", data)
  }

  return (
    <div className="p-10 font-proxima bg-[#F0EFEC]">
      <p className="text-3xl font-semibold mb-6">Edit Profile</p>
      <FormProvider {...form}> 
        <Card className="mt-5">
          <CardHeader className="pb-2">
            <h2 className="text-sm">My Profile</h2>
          </CardHeader>
          <Separator />
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="pt-2 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">

                  <FormField
                    control={form.control}
                    name="logoImage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profile Picture *</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input type="file" className="w-96" {...field} />
                            <span className="text-sm text-muted-foreground">
                              {field.value ? "Image selected" : "No image selected"}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                
                  <FormField
                    control={form.control}
                    name="employerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter employer name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

          
                  <FormField
                    control={form.control}
                    name="categories"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categories *</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.name}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

          
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter website URL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                
                  <FormField
                    control={form.control}
                    name="whatsappNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp Number *</FormLabel>
                        <Input placeholder="Enter WhatsApp number" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country *</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select " />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                            <SelectItem value="fl">Florida</SelectItem>
                            <SelectItem value="il">Illinois</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
             
                <FormField
                  control={form.control}
                  name="friendlyAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Friendly Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

               
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Introduce Yourself *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter description"
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                 
                  <FormField
                    control={form.control}
                    name="instagramUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instagram (Optional)</FormLabel>
                        <FormControl>
                          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                            <span className="p-3 bg-gray-200 text-gray-500">
                              <Instagram className="h-5 w-5" />
                            </span>
                            <Input
                              type="url"
                              placeholder="Your Instagram URL (optional)"
                              className="flex-grow bg-transparent border-none focus:ring-0"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

              
                  <FormField
                    control={form.control}
                    name="facebookUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facebook (Optional)</FormLabel>
                        <FormControl>
                          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                            <span className="p-3 bg-gray-200 text-gray-500">
                              <Facebook className="h-5 w-5" />
                            </span>
                            <Input
                              type="url"
                              placeholder="Your Facebook URL (optional)"
                              className="flex-grow bg-transparent border-none focus:ring-0"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                
                  <FormField
                    control={form.control}
                    name="linkedinUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn (Optional)</FormLabel>
                        <FormControl>
                          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                            <span className="p-3 bg-gray-200 text-gray-500">
                              <Linkedin className="h-5 w-5" />
                            </span>
                            <Input
                              type="url"
                              placeholder="Your LinkedIn URL (optional)"
                              className="flex-grow bg-transparent border-none focus:ring-0"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

              
                  <FormField
                    control={form.control}
                    name="twitterUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Twitter (Optional)</FormLabel>
                        <FormControl>
                          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                            <span className="p-3 bg-gray-200 text-gray-500">
                              <Twitter className="h-5 w-5" />
                            </span>
                            <Input
                              type="url"
                              placeholder="Your Twitter URL (optional)"
                              className="flex-grow bg-transparent border-none focus:ring-0"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Save Profile
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </FormProvider>
    </div>
  )
}

export default EditProfileForm
