import { GeneratePodcastProps } from '@/types'
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react";
import React, { useState } from 'react'


const useGenerator = (props: GeneratePodcastProps) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const generatePodcast = () => {
        setIsGenerating(true);

        const timer = setInterval(() => {
            setIsGenerating(false);
        }, 2000)

        clearInterval(timer);

        console.log("generating podcast")

    }



    return { isGenerating, generatePodcast };
}




const GeneratePodcast = (props: GeneratePodcastProps) => {

    const { isGenerating, generatePodcast } = useGenerator(props);

    return (
        <div>
            <div className="flex flex-col gap-2.5">
                <Label className="text-16 font-bold text-white-1">
                    AI Prompt to generate Podcast
                </Label>
                <Textarea
                    className="input-class font-light focus-visible:ring-offset-orange-1"
                    placeholder='Provide text to generate audio'
                    rows={5}
                    value={props.voicePrompt}
                    onChange={(e) => props.setVoicePrompt(e.target.value)}
                />
            </div>
            <div className="mt-5 w-full max-w-[200px]">
                <Button type="submit" className="text-16 bg-orange-1 py-4 font-bold text-white-1" onClick={generatePodcast}>
                    {isGenerating ? (
                        <>
                            Generating
                            <Loader size={20} className="animate-spin ml-2" />
                        </>
                    ) : (
                        'Generate'
                    )}
                </Button>
            </div>
        </div>
    )
}

export default GeneratePodcast