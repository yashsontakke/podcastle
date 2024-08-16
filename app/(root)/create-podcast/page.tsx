"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Loader } from "lucide-react";
import GeneratePodcast from "@/components/ui/GeneratePodcast";

const formSchema = z.object({
  podcastTitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  podcastDescription: z.string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(500, {
      message: "Description must be less than 500 characters.",
    }),
})

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];

export default function ProfileForm() {

  const [voiceType, setVoiceType] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  // voiceType: string;
  // setAudio: Dispatch<SetStateAction<string>>;
  // audio: string;
  // setAudioStorageId: Dispatch<SetStateAction<number | null>>;
  // voicePrompt: string;
  // setVoicePrompt: Dispatch<SetStateAction<string>>;
  // setAudioDuration: Dispatch<SetStateAction<number>>;

  const [audioUrl, setAudioUrl] = useState('');

  const [audioStorageId, setAudioStoregeId] = useState<number | null>(null);

  const [voicePrompt, setVoicePrompt] = useState('');

  const [audioDuration, setAudioDuration] = useState(0);

  const [imagePromt, setImagePromt] = useState('');

  const [imageStorageId, setImageStoreid] = useState<string | null>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(null);



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setIsSubmitting(true);
    console.log("handling submit ")
  }


  return (
    <section className="flex flex-col mt-10">
      <h1 className="text-20 font-bold text-white-1">Create Podcast</h1>

      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <FormField
              control={form.control}
              name="podcastTitle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">Title</FormLabel>
                  <FormControl>
                    <Input className="input-class focus-visible:ring-offset-orange-1" placeholder=" Podcast" {...field} />
                  </FormControl>
                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />




            <div className="flex flex-col gap-2.5">
              <Label className="text-16 font-bold text-white-1">
                Select AI Voice
              </Label>

              <Select onValueChange={(value) => setVoiceType(value)}>
                <SelectTrigger className={cn('text-16 w-full border-none bg-black-1 text-gray-1 focus-visible:ring-offset-orange-1')}>
                  <SelectValue placeholder="Select AI Voice" />
                </SelectTrigger>
                <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1">
                  {voiceCategories.map((voice) =>
                    <SelectItem value={voice} key={voice} className="capitalize focus:bg-orange-1">{voice}</SelectItem>
                  )}
                </SelectContent>
                {voiceType && <audio
                  src={`/${voiceType}.mp3`}
                  autoPlay
                  className="hidden">
                </audio>}
              </Select>

              <FormField
                control={form.control}
                name="podcastDescription"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2.5">
                    <FormLabel className="text-16 font-bold text-white-1">Description</FormLabel>
                    <FormControl>
                      <Textarea className="input-class focus-visible:ring-offset-orange-1" placeholder="Write a short podcast description" {...field} />
                    </FormControl>
                    <FormMessage className="text-white-1" />
                  </FormItem>
                )}
              />

            </div>

            <div>
              {/* // voiceType: string;
                  // setAudio: Dispatch<SetStateAction<string>>;
                  // audio: string;
                  // setAudioStorageId: Dispatch<SetStateAction<number | null>>;
                  // voicePrompt: string;
                  // setVoicePrompt: Dispatch<SetStateAction<string>>;
                  // setAudioDuration: Dispatch<SetStateAction<number>>; */}

              <GeneratePodcast
                voiceType={voiceType}
                setAudio={setAudioUrl}
                setAudioStorageId={setAudioStoregeId}
                voicePrompt={voicePrompt}
                setVoicePrompt={setVoicePrompt}
                setAudioDuration={setAudioDuration}
                audio={audioUrl}
              />

              <div>
                <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1">
                  {isSubmitting ? (
                    <>
                      Submitting
                      <Loader size={20} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'Submit & Publish Podcast'
                  )}
                </Button>
              </div>
            </div>




          </div>
        </form>
      </Form>




    </section >

  )
}
