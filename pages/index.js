import { useEffect, useRef } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

export default function Home() {
	let vHeader = useRef();
	let vMain = useRef();
	let vFooter = useRef();
	let box1 = useRef();
	let box2 = useRef();
	let box3 = useRef();

	let tl = gsap.timeline({
		paused: true
	});

	useEffect(() => {
		gsap.to(box2.current, {
			scrollTrigger: {
				trigger: box2.current,
				start: 'top center',
				end: 'bottom 80%',
				pin: box1.current,
				triggerActions: 'restart pause reverse pause',
				scrub: true,
				markers: true,
			},
			x: 100,
			// rotation: 90
		});
	}, []);


	function mouseEnter() {
		console.log('entering');
		// tl.play();
	}

	function mouseLeave() {
		console.log('leaving');
		// tl.reverse();
	}

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<header id="vHeader" className={styles.vHeader} ref={vHeader}></header>

      <main ref={vMain} id="indexTagline" className={styles.main}>
				<h1
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
				>inside main - nice</h1>
				<div ref={box1} className="box1"></div>
				<div ref={box2} className="box2"></div>
				<div ref={box3} className="box3"></div>
      </main>

      <footer ref={vFooter} className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
