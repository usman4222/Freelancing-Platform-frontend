import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { X, Plus } from 'lucide-react'
import toast from 'react-hot-toast'
import { URLS } from '@/config/config'
import { Link, useNavigate } from 'react-router-dom'

const packageSchema = z.object({
  title: z.string().min(1, "Package title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  deliveryTime: z.string().min(1, "Delivery time is required"),
  revisions: z.string().min(1, "Number of revisions is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  features: z.array(z.string()).min(1, "At least one feature is required")
})

const serviceFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  responseTime: z.string().min(1, "Response time is required"),
  englishLevel: z.string().min(1, "English level is required"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  basicPackage: packageSchema,
  standardPackage: packageSchema,
  premiumPackage: packageSchema,
  location: z.string().min(1, "Location is required"),
  serviceArea: z.string().min(1, "Service area is required"),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number()
  })
})


function PackageTier({
  title,
  type,
  control,
  defaultFeatures = [""]
}) {
  const [features, setFeatures] = useState(defaultFeatures)

  const addFeature = () => {
    setFeatures([...features, ""])
  }

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index))
  }

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name={`${type}.title`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Package Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Basic Website Design" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`${type}.description`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Describe what's included in this package" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name={`${type}.deliveryTime`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Time</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Day</SelectItem>
                      <SelectItem value="2">2 Days</SelectItem>
                      <SelectItem value="3">3 Days</SelectItem>
                      <SelectItem value="5">5 Days</SelectItem>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="14">14 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`${type}.revisions`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Revisions</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Revision</SelectItem>
                      <SelectItem value="2">2 Revisions</SelectItem>
                      <SelectItem value="3">3 Revisions</SelectItem>
                      <SelectItem value="unlimited">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name={`${type}.price`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price ($)</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Features</FormLabel>
          {features.map((_, index) => (
            <FormField
              key={index}
              control={control}
              name={`${type}.features.${index}`}
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2">
                    <FormControl>
                      <Input {...field} placeholder="e.g. Source Code Included" />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFeature(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={addFeature}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Feature
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function EditGig({ gigData }) {
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      title: gigData?.title || "",
      category: gigData?.category || "",
      responseTime: gigData?.responseTime || "",
      englishLevel: gigData?.englishLevel || "",
      description: gigData?.description || "",
      basicPackage: {
        title: gigData?.basicPackage?.title || "",
        description: gigData?.basicPackage?.description || "",
        deliveryTime: gigData?.basicPackage?.deliveryTime || "",
        revisions: gigData?.basicPackage?.revisions || "",
        price: gigData?.basicPackage?.price || 0,
        features: gigData?.basicPackage?.features || [""]
      },
      standardPackage: {
        title: gigData?.standardPackage?.title || "",
        description: gigData?.standardPackage?.description || "",
        deliveryTime: gigData?.standardPackage?.deliveryTime || "",
        revisions: gigData?.standardPackage?.revisions || "",
        price: gigData?.standardPackage?.price || 0,
        features: gigData?.standardPackage?.features || [""]
      },
      premiumPackage: {
        title: gigData?.premiumPackage?.title || "",
        description: gigData?.premiumPackage?.description || "",
        deliveryTime: gigData?.premiumPackage?.deliveryTime || "",
        revisions: gigData?.premiumPackage?.revisions || "",
        price: gigData?.premiumPackage?.price || 0,
        features: gigData?.premiumPackage?.features || [""]
      },
      location: gigData?.location || "",
      serviceArea: gigData?.serviceArea || "",
      coordinates: gigData?.coordinates || { lat: 0, lng: 0 }
    }
  })

  useEffect(() => {
    if (gigData) {
      form.reset(gigData)
    }
  }, [gigData, form])

  async function onSubmit(data) {
    try {
      // Assuming you have an API function to update the gig
      await updateGig(gigData.id, data)
      toast.success("Gig updated successfully")
      navigate(URLS.FREELANCER.MANAGE_GIGS.INDEX)
    } catch (error) {
      toast.error("Failed to update gig. Please try again.")
    }
  }

  return (
    <div className="bg-[#F0EFEC] h-full p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
 
          <Card>
            <CardHeader>
              <CardTitle>General</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title*</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category*</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="responseTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Response Time*</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select response time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1h">1 Hour</SelectItem>
                            <SelectItem value="4h">4 Hours</SelectItem>
                            <SelectItem value="24h">24 Hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="englishLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>English Level*</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select English level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="conversational">Conversational</SelectItem>
                            <SelectItem value="fluent">Fluent</SelectItem>
                            <SelectItem value="native">Native</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description*</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={6} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Packages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PackageTier
                  title="Basic Package"
                  type="basicPackage"
                  control={form.control}
                  defaultFeatures={["Source Code", "Basic Support"]}
                />
                <PackageTier
                  title="Standard Package"
                  type="standardPackage"
                  control={form.control}
                  defaultFeatures={["Source Code", "Premium Support", "Installation Guide"]}
                />
                <PackageTier
                  title="Premium Package"
                  type="premiumPackage"
                  control={form.control}
                  defaultFeatures={["Source Code", "Premium Support", "Installation Guide", "1 Month Support"]}
                />
              </div>
            </CardContent>
          </Card>

       

          <div className="flex justify-end gap-4">
            <Button variant="outline" >
                <Link className='w-full' to={URLS.FREELANCER.MANAGE_GIGS.INDEX}>Cancel</Link>
            </Button>
            <Button type="submit">Update Gig</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

