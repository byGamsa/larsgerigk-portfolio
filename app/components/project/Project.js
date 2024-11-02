import React from 'react'
import Phone from '../phone/Phone'
import { Card } from '../phone/Card'

import Screenshot from "../../assets/Screenshot.png";
import Screenshot2 from "../../assets/Screenshot2.png";
import Monastix from "../../assets/Monastix.png";
import SecretSips from "../../assets/SecretSips.png";
import Button from '../button/Button';
import TextReveal from '@/app/utils/textEffects/TextReveal';

export default function Project() {
    return (
        <section id="projects" className="section-wrapper">
            <div className="flex items-center justify-center pt-96 gap-36 ">

                <div className="flex flex-col items-start gap-4 mb-12 z-20">
                    <div className="w-40 h-2 bg-violet-500" />
                    <TextReveal>
                        <h1 className="text-3xl md:text-5xl font-black text-end">
                            Sipster
                        </h1>
                    </TextReveal>
                    <TextReveal>
                        <span className='text-3xl text-neutral-400'>
                            Where every sip tells a story!
                        </span>
                    </TextReveal>
                    <Button />
                </div>
                <Card>
                    <div className='flex flex-row'>
                        <div>
                            <Phone image={Screenshot} />
                        </div>
                        <div className='mt-24 ml-[-100px]'>
                            <Phone image={Screenshot2} />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="flex items-center justify-center pt-96 gap-36">
                <Card>
                    <Phone image={Monastix} width={800} />
                </Card>
                <div className="flex flex-col items-start gap-4 mb-12 z-20"  >
                    <div className="w-40 h-2 bg-violet-500" />
                    <TextReveal>
                        <h1 className="text-3xl md:text-5xl font-black text-end">
                            Monastix
                        </h1>
                    </TextReveal>
                    <TextReveal>
                        <span className='text-3xl text-neutral-400'>
                            Split your bills with ease!
                        </span>
                    </TextReveal>
                    <Button />
                </div>
            </div>
            <div className="flex items-center justify-center pt-96 gap-36">

                <div className="flex flex-col items-start gap-4 mb-12 z-20"  >
                    <div className="w-40 h-2 bg-violet-500" />
                    <TextReveal>
                        <h1 className="text-3xl md:text-5xl font-black text-end">
                            Secret Sips
                        </h1>
                    </TextReveal>
                    <TextReveal>
                        <span className='text-3xl text-neutral-400'>
                            Complete secret missions, sip by sip!
                        </span>
                    </TextReveal>
                    <Button />
                </div>
                <Card>
                    <Phone image={SecretSips} width={800} />
                </Card>
            </div>
        </section>
    )
}
