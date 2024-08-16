/* eslint-disable no-unused-vars */

import { Dispatch, SetStateAction } from "react";



export interface EmptyStateProps {
    title: string;
    search?: boolean;
    buttonText?: string;
    buttonLink?: string;
}

export interface TopPodcastersProps {
    _id: number;
    _creationTime: number;
    email: string;
    imageUrl: string;
    clerkId: string;
    name: string;
    podcast: {
        podcastTitle: string;
        podcastId: number;
    }[];
    totalPodcasts: number;
}

export interface PodcastProps {
    _id: number;
    _creationTime: number;
    audioStorageId: number | null;
    user: number;
    podcastTitle: string;
    podcastDescription: string;
    audioUrl: string | null;
    imageUrl: string | null;
    imageStorageId: number | null;
    author: string;
    authorId: string;
    authorImageUrl: string;
    voicePrompt: string;
    imagePrompt: string | null;
    voiceType: string;
    audioDuration: number;
    views: number;
}

export interface ProfilePodcastProps {
    podcasts: PodcastProps[];
    listeners: number;
}

export interface GeneratePodcastProps {
    voiceType: string;
    setAudio: Dispatch<SetStateAction<string>>;
    audio: string;
    setAudioStorageId: Dispatch<SetStateAction<number | null>>;
    voicePrompt: string;
    setVoicePrompt: Dispatch<SetStateAction<string>>;
    setAudioDuration: Dispatch<SetStateAction<number>>;
}

export interface GenerateThumbnailProps {
    setImage: Dispatch<SetStateAction<string>>;
    setImageStorageId: Dispatch<SetStateAction<number | null>>;
    image: string;
    imagePrompt: string;
    setImagePrompt: Dispatch<SetStateAction<string>>;
}

export interface LatestPodcastCardProps {
    imgUrl: string;
    title: string;
    duration: string;
    index: number;
    audioUrl: string;
    author: string;
    views: number;
    podcastId: number;
}

export interface PodcastDetailPlayerProps {
    audioUrl: string;
    podcastTitle: string;
    author: string;
    isOwner: boolean;
    imageUrl: string;
    podcastId: number;
    imageStorageId: number;
    audioStorageId: number;
    authorImageUrl: string;
    authorId: string;
}

export interface AudioProps {
    title: string;
    audioUrl: string;
    author: string;
    imageUrl: string;
    podcastId: string;
}

export interface AudioContextType {
    audio: AudioProps | undefined;
    setAudio: React.Dispatch<React.SetStateAction<AudioProps | undefined>>;
}

export interface PodcastCardProps {
    imgUrl: string;
    title: string;
    description: string;
    podcastId: number;
}

export interface CarouselProps {
    fansLikeDetail: TopPodcastersProps[];
}

export interface ProfileCardProps {
    podcastData: ProfilePodcastProps;
    imageUrl: string;
    userFirstName: string;
}

export type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};