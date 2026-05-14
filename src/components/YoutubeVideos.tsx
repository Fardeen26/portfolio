'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { MagicCard } from './ui/magic-card';
import Title from './ui/Title';
import { useDarkMode } from '@/hooks/useDarkMode';
import { youtubeVideosData } from '@/utils/constant';
import { I_YoutubeVideo } from '@/types/project';
import { inter } from '@/utils/fonts';

type ThumbTier = 'maxres' | 'hq' | 'sd';

const thumbUrl = (videoId: string, tier: ThumbTier) => {
    const file =
        tier === 'maxres' ? 'maxresdefault.jpg' : tier === 'hq' ? 'hqdefault.jpg' : 'sddefault.jpg';
    return `https://i.ytimg.com/vi/${videoId}/${file}`;
};

function YoutubeVideoCard({ item, idx }: { item: I_YoutubeVideo; idx: number }) {
    const [playing, setPlaying] = useState(false);
    const [thumbTier, setThumbTier] = useState<ThumbTier>('maxres');

    const onThumbError = useCallback(() => {
        setThumbTier((prev) => (prev === 'maxres' ? 'hq' : prev === 'hq' ? 'sd' : prev));
    }, []);

    const title = item.title ?? `YouTube video ${idx + 1}`;

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/5 dark:bg-black/20">
            {playing ? (
                <iframe
                    title={title}
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
                    width={1280}
                    height={720}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group/play absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`Play video: ${title}`}
                >
                    <Image
                        key={thumbTier}
                        src={thumbUrl(item.videoId, thumbTier)}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 42vw"
                        className="object-cover"
                        unoptimized
                        onError={onThumbError}
                    />
                    <span
                        aria-hidden
                        className="relative z-10 flex h-full w-full items-center justify-center bg-black/25 transition-colors group-hover/play:bg-black/35"
                    >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-black shadow-md ring-1 ring-black/10 transition-transform group-hover/play:scale-105 dark:bg-neutral-900 dark:text-white dark:ring-white/20">
                            <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7" fill="currentColor" aria-hidden>
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </span>
                </button>
            )}
        </div>
    );
}

const YoutubeVideos = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <section className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
            <span className="mb-3">
                <Title title="Youtube Videos/Tutorials" />
            </span>
            <div className="grid w-full grid-cols-2 max-sm:grid-cols-1 gap-5">
                {youtubeVideosData.map((item: I_YoutubeVideo, idx) => (
                    <MagicCard
                        key={`${item.videoId}-${idx}`}
                        className="h-fit w-full min-w-0 dark:shadow-2xl !bg-transparent border-none overflow-hidden rounded-xl"
                        gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}
                    >
                        <div className="w-full p-3 max-sm:p-2">
                            <YoutubeVideoCard item={item} idx={idx} />
                            {item.title ? (
                                <p className={`mt-2 text-center text-xs text-muted-foreground max-sm:text-[11px] ${inter}`}>
                                    {item.title}
                                </p>
                            ) : null}
                        </div>
                    </MagicCard>
                ))}
            </div>
        </section>
    );
};

export default YoutubeVideos;
