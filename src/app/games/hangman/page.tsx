'use client';
import { useRef,useState ,useEffect } from "react";
import Navbar from "@/components/Navbar";
import "./style.css";

export default function Hangman() {

    const h1 = useRef<HTMLParagraphElement>(null);
    const h2 = useRef<HTMLParagraphElement>(null);
    const h3 = useRef<HTMLParagraphElement>(null);
    const h4 = useRef<HTMLParagraphElement>(null);
    const h5 = useRef<HTMLParagraphElement>(null);
    const h6 = useRef<HTMLParagraphElement>(null);

    const c1 = useRef<HTMLDivElement>(null);
    const c2 = useRef<HTMLDivElement>(null);
    const c3 = useRef<HTMLDivElement>(null);
    const c4 = useRef<HTMLDivElement>(null);
    const c5 = useRef<HTMLDivElement>(null);
    const c6 = useRef<HTMLDivElement>(null);
    const c7 = useRef<HTMLDivElement>(null);
    const c8 = useRef<HTMLDivElement>(null);
    const c9 = useRef<HTMLDivElement>(null);
    const c10 = useRef<HTMLDivElement>(null);

    const kq = useRef<HTMLDivElement>(null);
    const kw = useRef<HTMLDivElement>(null);
    const ke = useRef<HTMLDivElement>(null);
    const kr = useRef<HTMLDivElement>(null);
    const kt = useRef<HTMLDivElement>(null);
    const ky = useRef<HTMLDivElement>(null);
    const ku = useRef<HTMLDivElement>(null);
    const ki = useRef<HTMLDivElement>(null);
    const ko = useRef<HTMLDivElement>(null);
    const kp = useRef<HTMLDivElement>(null);
    const ka = useRef<HTMLDivElement>(null);
    const ks = useRef<HTMLDivElement>(null);
    const kd = useRef<HTMLDivElement>(null);
    const kf = useRef<HTMLDivElement>(null);
    const kg = useRef<HTMLDivElement>(null);
    const kh = useRef<HTMLDivElement>(null);
    const kj = useRef<HTMLDivElement>(null);
    const kk = useRef<HTMLDivElement>(null);
    const kl = useRef<HTMLDivElement>(null);
    const kz = useRef<HTMLDivElement>(null);
    const kx = useRef<HTMLDivElement>(null);
    const kc = useRef<HTMLDivElement>(null);
    const kv = useRef<HTMLDivElement>(null);
    const kb = useRef<HTMLDivElement>(null);
    const kn = useRef<HTMLDivElement>(null);
    const km = useRef<HTMLDivElement>(null);

    const container = useRef<HTMLDivElement>(null);
    const win = useRef<HTMLDivElement>(null);
    const lose = useRef<HTMLDivElement>(null);

    let kqLock = false;
    let kwLock = false;
    let keLock = false;
    let krLock = false;
    let ktLock = false;
    let kyLock = false;
    let kuLock = false;
    let kiLock = false;
    let koLock = false;
    let kpLock = false;
    let kaLock = false;
    let ksLock = false;
    let kdLock = false;
    let kfLock = false;
    let kgLock = false;
    let khLock = false;
    let kjLock = false;
    let kkLock = false;
    let klLock = false;
    let kzLock = false;
    let kxLock = false;
    let kcLock = false;
    let kvLock = false;
    let kbLock = false;
    let knLock = false;
    let kmLock = false;


    let find = false;

    const words = [
            'abbreviate', 'abolishing', 'accounting', 'allegation', 
            'allocation', 'apocalyptic', 'arbitrator', 'assessment', 
            'authorized', 'backpacked', 'barbershop', 'benefactor', 
            'birthplace', 'blizzarded', 'blueprints', 'bookseller', 
            'broadcasted', 'campaigner', 'carpentered', 'catapulted', 
            'celebrated', 'checklists', 'chocolates', 'completion', 
            'conspiracy', 'consultant', 'continents', 'creativity', 
            'deactivate', 'deceptions', 'deficiency', 'deliberate', 
            'dependable', 'deployment', 'descendant', 'designates', 
            'destructive', 'devastated', 'difficulty', 'diplomatic', 
            'discourage', 'disrespect', 'documented', 'earthquake', 
            'economical', 'effortless', 'electrical', 'embroidery', 
            'emphasized', 'employment', 'encounters', 'endangered', 
            'enjoyments', 'enterprise', 'everything', 'exaggerate', 
            'exhausting', 'experience', 'fellowship', 'filmmakers', 
            'fireproofs', 'fluctuated', 'frameworks', 'friendship', 
            'frightened', 'fundraiser', 'glistening', 'government', 
            'greenhouse', 'guidebooks', 'hairpieces', 'handpicked', 
            'helicopter', 'historical', 'homeowners', 'houseplant', 
            'icebreaker', 'impression', 'industrial', 'influences', 
            'integrated', 'journalism', 'keyboardist', 'leadership', 
            'lighthouse', 'lumberjack', 'mainstream', 'maintenance',
            'marketable', 'mastermind', 'medication', 'motorcycle', 
            'networking', 'nightstand', 'newspapers', 'nonchalant', 
            'opposition', 'opportunity', 'overcharge', 'overcoming', 
            'overstated', 'parenthood', 'peacekeeper', 'pedestrian', 
            'perception', 'permanence', 'personally', 'photograph', 
            'playground', 'population', 'positivity', 'possessing', 
            'prescribed', 'productive', 'programmer', 'properties', 
            'providence', 'reflections', 'regardless', 'rehearsing', 
            'remarkable', 'repurposed', 'resistance', 'restaurant', 
            'revolution', 'roundabout', 'sandcastle', 'scientific', 
            'sensations', 'sightseers', 'skateboard', 'spacecraft', 
            'spectacles', 'standstill', 'strategist', 'streamlined', 
            'submission', 'successors', 'supervisor', 'suspicious', 
            'swallowing', 'techniques', 'television', 'threatened', 
            'understand', 'undertaken', 'university', 'viewpoints', 
            'volunteers', 'wilderness', 'withstands', 'workplaces', 
            'youngsters','basketball', 'blackboard', 'California', 
            'dictionary', 'elementary', 'fingertips', 'goalkeeper', 
            'hamburgers', 'incredible', 'lampshades', 'nationwide', 
            'operations', 'penmanship', 'quickening', 'recognized', 
            'tablespoon', 'ultimately', 'vocabulary', 'watermelon', 
            'yellowbird', 'zoological', 'bestseller', 'championed', 
            'drawbridge', 'jackhammer', 'kickboxing', 'landslides', 
            'microphone', 'noteworthy', 'overlooked', 'paintbrush',
            'quarantine', 'researcher', 'smartphone', 'typewriter', 
            'underneath', 'volleyball', 'wheelchair', 'yesteryear'
        ];
    const [word, setWord] = useState<string>('');


    function getWord() {
        const index = Math.floor(Math.random() * words.length);
        return words[index]; 
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        setWord(getWord());
    },[]);

    function reset() {

        if(c1.current && c2.current && c3.current && c4.current && c5.current && c6.current && c7.current && c8.current && c9.current && c10.current) {
            c1.current.innerHTML = '';
            c2.current.innerHTML = '';
            c3.current.innerHTML = '';
            c4.current.innerHTML = '';
            c5.current.innerHTML = '';
            c6.current.innerHTML = '';
            c7.current.innerHTML = '';
            c8.current.innerHTML = '';
            c9.current.innerHTML = '';
            c10.current.innerHTML = '';
        }

        if(h1.current) h1.current.classList.remove('used');
        if(h2.current) h2.current.classList.remove('used');
        if(h3.current) h3.current.classList.remove('used');
        if(h4.current) h4.current.classList.remove('used');
        if(h5.current) h5.current.classList.remove('used');
        if(h6.current) h6.current.classList.remove('used');

        kqLock = false;
        kwLock = false;
        keLock = false;
        krLock = false;
        ktLock = false;
        kyLock = false;
        kuLock = false;
        kiLock = false;
        koLock = false;
        kpLock = false;
        kaLock = false;
        ksLock = false;
        kdLock = false;
        kfLock = false;
        kgLock = false;
        khLock = false;
        kjLock = false;
        kkLock = false;
        klLock = false;
        kzLock = false;
        kxLock = false;
        kcLock = false;
        kvLock = false;
        kbLock = false;
        knLock = false;
        kmLock = false;

        if(kq.current) kq.current.classList.remove('used');
        if(kw.current) kw.current.classList.remove('used');
        if(ke.current) ke.current.classList.remove('used');
        if(kr.current) kr.current.classList.remove('used');
        if(kt.current) kt.current.classList.remove('used');
        if(ky.current) ky.current.classList.remove('used');
        if(ku.current) ku.current.classList.remove('used');
        if(ki.current) ki.current.classList.remove('used');
        if(ko.current) ko.current.classList.remove('used');
        if(kp.current) kp.current.classList.remove('used');
        if(ka.current) ka.current.classList.remove('used');
        if(ks.current) ks.current.classList.remove('used');
        if(kd.current) kd.current.classList.remove('used');
        if(kf.current) kf.current.classList.remove('used');
        if(kg.current) kg.current.classList.remove('used');
        if(kh.current) kh.current.classList.remove('used');
        if(kj.current) kj.current.classList.remove('used');
        if(kk.current) kk.current.classList.remove('used');
        if(kl.current) kl.current.classList.remove('used');
        if(kz.current) kz.current.classList.remove('used');
        if(kx.current) kx.current.classList.remove('used');
        if(kc.current) kc.current.classList.remove('used');
        if(kv.current) kv.current.classList.remove('used');
        if(kb.current) kb.current.classList.remove('used');
        if(kn.current) kn.current.classList.remove('used');
        if(km.current) km.current.classList.remove('used');

            const newWord = getWord();
            setWord(newWord);
    }

    // Function to handle keyboard clicks
    function keyboardClick(input:string){
        if(c1.current && c2.current && c3.current && c4.current && c5.current && c6.current && c7.current && c8.current && c9.current && c10.current && kq.current && kw.current && ke.current && kr.current && kt.current && ky.current && ku.current && ki.current && ko.current && kp.current && ka.current && ks.current && kd.current && kf.current && kg.current && kh.current && kj.current && kk.current && kl.current && kz.current && kx.current && kc.current && kv.current && kb.current && kn.current && km.current && h1.current && h2.current && h3.current && h4.current && h5.current && h6.current) {
            switch(input) {
                case 'q':
                    if(kqLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'q') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'q';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'q';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'q';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'q';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'q';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'q';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'q';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'q';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'q';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'q';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }
                
                        kq.current.classList.add('used');
                        kqLock = true;
                        find = false;
                    }
                    break;

                case 'w':
                    if(kwLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'w') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'w';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'w';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'w';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'w';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'w';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'w';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'w';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'w';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'w';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'w';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kw.current.classList.add('used');
                        kwLock = true;
                        find = false;
                    }
                    break;

                case 'e':
                    if(keLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'e') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'e';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'e';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'e';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'e';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'e';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'e';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'e';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'e';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'e';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'e';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        ke.current.classList.add('used');
                        keLock = true;
                        find = false;
                    }
                    break;

                case 'r':
                    if(krLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'r') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'r';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'r';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'r';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'r';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'r';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'r';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'r';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'r';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'r';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'r';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kr.current.classList.add('used');
                        krLock = true;
                        find = false;
                    }
                    break;
                
                case 't':
                    if(ktLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 't') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 't';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 't';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 't';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 't';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 't';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 't';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 't';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 't';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 't';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 't';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kt.current.classList.add('used');
                        ktLock = true;
                        find = false;
                    }
                    break;

                case 'y':
                    if(kyLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'y') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'y';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'y';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'y';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'y';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'y';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'y';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'y';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'y';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'y';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'y';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        ky.current.classList.add('used');
                        kyLock = true;
                        find = false;
                    }
                    break;

                case 'u':
                    if(kuLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'u') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'u';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'u';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'u';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'u';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'u';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'u';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'u';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'u';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'u';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'u';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        ku.current.classList.add('used');
                        kuLock = true;
                        find = false;
                    }
                    break;

                case 'i':
                    if(kiLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'i') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'i';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'i';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'i';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'i';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'i';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'i';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'i';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'i';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'i';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'i';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        ki.current.classList.add('used');
                        kiLock = true;
                        find = false;
                    }
                    break;

                case 'o':
                    if(koLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'o') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'o';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'o';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'o';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'o';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'o';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'o';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'o';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'o';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'o';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'o';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        ko.current.classList.add('used');
                        koLock = true;
                        find = false;
                    }
                    break;

                case 'p':
                    if(kpLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'p') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'p';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'p';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'p';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'p';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'p';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'p';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'p';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'p';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'p';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'p';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kp.current.classList.add('used');
                        kpLock = true;
                        find = false;
                    }
                    break;

                case 'a':
                    if(kaLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'a') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'a';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'a';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'a';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'a';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'a';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'a';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'a';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'a';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'a';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'a';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        ka.current.classList.add('used');
                        kaLock = true;
                        find = false;
                    }
                    break;

                case 's':
                    if(ksLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 's') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 's';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 's';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 's';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 's';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 's';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 's';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 's';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 's';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 's';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 's';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        ks.current.classList.add('used');
                        ksLock = true;
                        find = false;
                    }
                    break;

                case 'd':
                    if(kdLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'd') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'd';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'd';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'd';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'd';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'd';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'd';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'd';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'd';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'd';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'd';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kd.current.classList.add('used');
                        kdLock = true;
                        find = false;
                    }
                    break;

                case 'f':
                    if(kfLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'f') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'f';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'f';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'f';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'f';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'f';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'f';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'f';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'f';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'f';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'f';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kf.current.classList.add('used');
                        kfLock = true;
                        find = false;
                    }
                    break;

                case 'g':
                    if(kgLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'g') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'g';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'g';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'g';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'g';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'g';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'g';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'g';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'g';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'g';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'g';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kg.current.classList.add('used');
                        kgLock = true;
                        find = false;
                    }
                    break;

                case 'h':
                    if(khLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'h') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'h';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'h';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'h';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'h';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'h';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'h';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'h';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'h';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'h';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'h';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kh.current.classList.add('used');
                        khLock = true;
                        find = false;
                    }
                    break;

                case 'j':
                    if(kjLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'j') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'j';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'j';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'j';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'j';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'j';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'j';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'j';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'j';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'j';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'j';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kj.current.classList.add('used');
                        kjLock = true;
                        find = false;
                    }
                    break;

                case 'k':
                    if(kkLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'k') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'k';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'k';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'k';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'k';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'k';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'k';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'k';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'k';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'k';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'k';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kk.current.classList.add('used');
                        kkLock = true;
                        find = false;
                    }
                    break;

                case 'l':
                    if(klLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'l') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'l';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'l';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'l';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'l';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'l';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'l';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'l';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'l';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'l';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'l';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kl.current.classList.add('used');
                        klLock = true;
                        find = false;
                    }
                    break;

                case 'z':
                    if(kzLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'z') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'z';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'z';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'z';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'z';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'z';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'z';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'z';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'z';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'z';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'z';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kz.current.classList.add('used');
                        kzLock = true;
                        find = false;
                    }
                    break;

                case 'x':
                    if(kxLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'x') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'x';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'x';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'x';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'x';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'x';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'x';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'x';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'x';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'x';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'x';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kx.current.classList.add('used');
                        kxLock = true;
                        find = false;
                    }
                    break;

                case 'c':
                    if(kcLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'c') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'c';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'c';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'c';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'c';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'c';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'c';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'c';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'c';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'c';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'c';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kc.current.classList.add('used');
                        kcLock = true;
                        find = false;
                    }
                    break;

                case 'v':
                    if(kvLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'v') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'v';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'v';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'v';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'v';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'v';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'v';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'v';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'v';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'v';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'v';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kv.current.classList.add('used');
                        kvLock = true;
                        find = false;
                    }
                    break;

                case 'b':
                    if(kbLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'b') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'b';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'b';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'b';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'b';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'b';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'b';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'b';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'b';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'b';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'b';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kb.current.classList.add('used');
                        kbLock = true;
                        find = false;
                    }
                    break;

                case 'n':
                    if(knLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'n') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'n';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'n';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'n';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'n';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'n';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'n';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'n';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'n';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'n';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'n';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        kn.current.classList.add('used');
                        knLock = true;
                        find = false;
                    }
                    break;

                case 'm':
                    if(kmLock == false){
                        for(let i=0; i<word.length; i++) {
                            if(word[i] == 'm') {
                                find = true;
                                if(i==0){
                                    c1.current.innerHTML = 'm';
                                }
                                else if(i==1){
                                    c2.current.innerHTML = 'm';
                                }
                                else if(i==2){
                                    c3.current.innerHTML = 'm';
                                }
                                else if(i==3){
                                    c4.current.innerHTML = 'm';
                                }
                                else if(i==4){
                                    c5.current.innerHTML = 'm';
                                }
                                else if(i==5){
                                    c6.current.innerHTML = 'm';
                                }
                                else if(i==6){
                                    c7.current.innerHTML = 'm';
                                }
                                else if(i==7){
                                    c8.current.innerHTML = 'm';
                                }
                                else if(i==8){
                                    c9.current.innerHTML = 'm';
                                }
                                else if(i==9){
                                    c10.current.innerHTML = 'm';
                                }
                            }
                        }
                        if (find === false) {
                            if (h6.current.classList.contains('used') === false) {
                                h6.current.classList.add('used');
                            } 
                            else if (h5.current.classList.contains('used') === false) {
                                h5.current.classList.add('used');
                            } 
                            else if (h4.current.classList.contains('used') === false) {
                                h4.current.classList.add('used');
                            } 
                            else if (h3.current.classList.contains('used') === false) {
                                h3.current.classList.add('used');
                            } 
                            else if (h2.current.classList.contains('used') === false) {
                                h2.current.classList.add('used');
                            } 
                            else if (h1.current.classList.contains('used') === false) {
                                h1.current.classList.add('used');
                            }
                        }

                        km.current.classList.add('used');
                        kmLock = true;
                        find = false;
                    }
                    break;
                
            }

            if(c1.current.innerHTML !== '' && c2.current.innerHTML !== '' && c3.current.innerHTML !== '' && c4.current.innerHTML !== '' && c5.current.innerHTML !== '' && c6.current.innerHTML !== '' && c7.current.innerHTML !== '' && c8.current.innerHTML !== '' && c9.current.innerHTML !== '' && c10.current.innerHTML !== '') {
                if(container.current) container.current.style.display = 'none';
                if(win.current) win.current.style.display = 'flex';
            }

            if (h6.current.classList.contains('used') && h5.current.classList.contains('used') && h4.current.classList.contains('used') && h3.current.classList.contains('used') && h2.current.classList.contains('used') && h1.current.classList.contains('used')) {
                if(container.current) container.current.style.display = 'none';
                if(lose.current) lose.current.style.display = 'flex';
            }

        }
    }
    

    return(
        <>
            <Navbar/>
            <div className="win" ref={win}>
                <h1>YOU WIN!</h1>
                <p>Congratulations! You guessed the word correctly.</p>
                <p>The word was: <span>{word}</span></p>
                <a className="playAgainBtn" onClick={()=>{
                    reset();
                    if(win.current) win.current.style.display = 'none';
                    if(lose.current) lose.current.style.display = 'none';
                    if(container.current) container.current.style.display = 'flex';
                    }}>Play Again</a>
            </div>
            <div className="lose" ref={lose}>
                <h1>YOU LOSE!</h1>
                <p>Sorry, you couldn&apos;t guess the word.</p>
                <p>The word was: <span>{word}</span></p>
                <a className="playAgainBtn" onClick={()=>{
                    reset();
                    if(win.current) win.current.style.display = 'none';
                    if(lose.current) lose.current.style.display = 'none';
                    if(container.current) container.current.style.display = 'flex';
                    }}>Play Again</a>
            </div>
            <div className="container" ref={container}>
                <div className="hearts">
                    <p ref={h1}>💚</p>
                    <p ref={h2}>💚</p>
                    <p ref={h3}>💚</p>
                    <p ref={h4}>💚</p>
                    <p ref={h5}>💚</p>
                    <p ref={h6}>💚</p>
                </div>

                <div className="word">
                    <div ref={c1}></div>
                    <div ref={c2}></div>
                    <div ref={c3}></div>
                    <div ref={c4}></div>
                    <div ref={c5}></div>
                    <div ref={c6}></div>
                    <div ref={c7}></div>
                    <div ref={c8}></div>
                    <div ref={c9}></div>
                    <div ref={c10}></div>
                </div>

                <div className="keyboard">
                    <div className="row1">
                        <div ref={kq} onClick={()=> {keyboardClick('q')}}>q</div>
                        <div ref={kw} onClick={()=> {keyboardClick('w')}}>w</div>
                        <div ref={ke} onClick={()=> {keyboardClick('e')}}>e</div>
                        <div ref={kr} onClick={()=> {keyboardClick('r')}}>r</div>
                        <div ref={kt} onClick={()=> {keyboardClick('t')}}>t</div>
                        <div ref={ky} onClick={()=> {keyboardClick('y')}}>y</div>
                        <div ref={ku} onClick={()=> {keyboardClick('u')}}>u</div>
                        <div ref={ki} onClick={()=> {keyboardClick('i')}}>i</div>
                        <div ref={ko} onClick={()=> {keyboardClick('o')}}>o</div>
                        <div ref={kp} onClick={()=> {keyboardClick('p')}}>p</div>
                    </div>
                    <div className="row2">
                        <div ref={ka} onClick={()=> {keyboardClick('a')}}>a</div>
                        <div ref={ks} onClick={()=> {keyboardClick('s')}}>s</div>
                        <div ref={kd} onClick={()=> {keyboardClick('d')}}>d</div>
                        <div ref={kf} onClick={()=> {keyboardClick('f')}}>f</div>
                        <div ref={kg} onClick={()=> {keyboardClick('g')}}>g</div>
                        <div ref={kh} onClick={()=> {keyboardClick('h')}}>h</div>
                        <div ref={kj} onClick={()=> {keyboardClick('j')}}>j</div>
                        <div ref={kk} onClick={()=> {keyboardClick('k')}}>k</div>
                        <div ref={kl} onClick={()=> {keyboardClick('l')}}>l</div>
                    </div>
                    <div className="row3">
                        <div ref={kz} onClick={()=> {keyboardClick('z')}}>z</div>
                        <div ref={kx} onClick={()=> {keyboardClick('x')}}>x</div>
                        <div ref={kc} onClick={()=> {keyboardClick('c')}}>c</div>
                        <div ref={kv} onClick={()=> {keyboardClick('v')}}>v</div>
                        <div ref={kb} onClick={()=> {keyboardClick('b')}}>b</div>
                        <div ref={kn} onClick={()=> {keyboardClick('n')}}>n</div>
                        <div ref={km} onClick={()=> {keyboardClick('m')}}>m</div>
                    </div>
                </div>

                <div className="buttons">
                    <a onClick={reset}>Reset</a>
                    <a href="/games/hangman/rules">Rules</a>
                </div>
            </div>
        </>
    );
}