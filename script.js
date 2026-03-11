        const SKILLS = ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB", "C++", "Next.js", "Git", "GitHub"];
        const PROJECTS = [
            { title: "Roadmap Generator", tech: "Reactc.js  • Tailwind", desc: "A beginner to expert level roadmap generator for any course even school subjects.", site: "https://generate-roadmap.vercel.app/", github: "https://github.com/jyotidxt/roadmap-generator" },
            { title: "Speed Typing Game", tech: "Node • Tailwind • Three.js", desc: "A fast word typing game with timer and diffficulty level.", site: "https://type-speed-delta.vercel.app/", github: "https://github.com/jyotidxt/typeSpeed" },
            { title: "Code Friendly AI", tech: "HTML • CSS • JS", desc: "AI powered code generation for full stack based on user prompt.", site: "https://code-friendly-ai.vercel.app", github: "https://github.com/jyotidxt/codeFriendlyAI" }
        ];

        // --- DOM INJECTION ---
        const skillsGrid = document.getElementById('skills-grid');
        SKILLS.forEach((skill, i) => {
            const card = document.createElement('div');
            card.className = 'skill-card p-4 md:p-6 glass rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 transition-all cursor-default';
            card.innerHTML = `
                <div class="text-white font-black text-[10px] md:text-xs uppercase tracking-widest">${skill}</div>
                <div class="h-1 w-6 md:w-8 rounded-full ${i % 2 === 0 ? 'bg-sky-500' : 'bg-purple-500'}"></div>
            `;
            skillsGrid.appendChild(card);
        });

        const projectsGrid = document.getElementById('projects-grid');
        PROJECTS.forEach((proj, i) => {
            const card = document.createElement('div');
            card.className = 'project-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] glass flex flex-col h-full group';
            card.innerHTML = `
                <div class="text-sky-400 font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-4">0${i+1}_BUILD</div>
                <h3 class="project-title text-2xl md:text-3xl font-black mb-3 transition-colors">${proj.title}</h3>
                <p class="text-slate-500 text-xs md:text-sm mb-6 md:mb-8 flex-grow leading-relaxed font-medium">${proj.desc}</p>
                <div class="flex items-center gap-3 md:gap-4 mt-auto">
                    <a href="${proj.site}" class="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-black py-3 md:py-4 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all">
                        Website
                    </a>
                    <a href="${proj.github}" class="p-3 md:p-4 glass hover:bg-white/10 text-white rounded-xl transition-all">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        // --- MOBILE MENU TOGGLE ---
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = mobileMenu.querySelectorAll('a');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const isActive = mobileMenu.classList.contains('active');
            menuIcon.innerHTML = isActive 
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>';
            });
        });

        // --- THREE.JS SETUP ---
        let scene, camera, renderer, laptop, core, torusKnot, brainSphere;
        const container = document.getElementById('canvas-container');

        function init3D() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);
            
            const pointLight = new THREE.PointLight(0x0ea5e9, 2);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            const spotLight = new THREE.SpotLight(0xa855f7, 2);
            spotLight.position.set(-10, 20, 10);
            scene.add(spotLight);

            // Models
            createHomeModel();
            createDataCore();

            updateCameraFov();
            animate();
        }

        function updateCameraFov() {
            if (window.innerWidth < 768) {
                camera.fov = 60; // Wider FOV for mobile
            } else {
                camera.fov = 45;
            }
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }

        function createHomeModel() {
            const group = new THREE.Group();
            
            // Desk
            const deskGeo = new THREE.BoxGeometry(4.5, 0.1, 2.2);
            const deskMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.9, roughness: 0.1 });
            const desk = new THREE.Mesh(deskGeo, deskMat);
            group.add(desk);

            // Laptop
            const lapBaseGeo = new THREE.BoxGeometry(1.3, 0.05, 0.9);
            const lapMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
            const lapBase = new THREE.Mesh(lapBaseGeo, lapMat);
            lapBase.position.set(0, 0.05, 0.2);
            group.add(lapBase);

            const lapScreenGeo = new THREE.BoxGeometry(1.3, 0.85, 0.04);
            const lapScreen = new THREE.Mesh(lapScreenGeo, lapMat);
            lapScreen.position.set(0, 0.45, -0.25);
            lapScreen.rotation.x = -0.3;
            group.add(lapScreen);

            // Magic Brain Sphere (NEW 3D MODEL FOR HOME)
            const brainGeo = new THREE.IcosahedronGeometry(0.4, 1);
            const brainMat = new THREE.MeshStandardMaterial({ 
                color: 0x0ea5e9, 
                wireframe: true,
                emissive: 0x0ea5e9,
                emissiveIntensity: 0.5
            });
            brainSphere = new THREE.Mesh(brainGeo, brainMat);
            brainSphere.position.set(0, 1.4, -0.3);
            group.add(brainSphere);

            // Avatar (Girl Working)
            const bodyGeo = new THREE.BoxGeometry(0.7, 0.9, 0.4);
            const body = new THREE.Mesh(bodyGeo, lapMat);
            body.position.set(0, 0.5, 1.3);
            group.add(body);

            const headGeo = new THREE.SphereGeometry(HeadSize(), 32, 32);
            function HeadSize() { return window.innerWidth < 768 ? 0.2 : 0.25; }
            const head = new THREE.Mesh(headGeo, new THREE.MeshStandardMaterial({ color: 0x222222 }));
            head.position.set(0, 1.2, 1.3);
            group.add(head);

            // Stylized Hair / Ponytail for the Girl avatar
            const hairGeo = new THREE.BoxGeometry(0.2, 0.4, 0.2);
            const hair = new THREE.Mesh(hairGeo, new THREE.MeshStandardMaterial({ color: 0x000000 }));
            hair.position.set(0, 1.1, 1.55);
            hair.rotation.x = 0.3;
            group.add(hair);

            // Floating Knot
            const knotGeo = new THREE.TorusKnotGeometry(0.6, 0.2, 128, 16);
            const knotMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, metalness: 1, roughness: 0.1 });
            torusKnot = new THREE.Mesh(knotGeo, knotMat);
            torusKnot.position.set(2.5, 2.5, -1.5);
            group.add(torusKnot);

            laptop = group;
            laptop.position.y = -1;
            scene.add(laptop);
        }

        function createDataCore() {
            core = new THREE.Group();
            
            const octGeo = new THREE.OctahedronGeometry(2, 0);
            const octMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, wireframe: true });
            const oct = new THREE.Mesh(octGeo, octMat);
            core.add(oct);

            const ring1Geo = new THREE.TorusGeometry(3, 0.03, 16, 100);
            const ringMat = new THREE.MeshBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.2 });
            const ring1 = new THREE.Mesh(ring1Geo, ringMat);
            ring1.rotation.x = Math.PI / 2;
            core.add(ring1);

            core.position.z = 18;
            scene.add(core);
        }

        function animate() {
            requestAnimationFrame(animate);
            
            const time = Date.now() * 0.001;
            
            if (torusKnot) {
                torusKnot.rotation.x += 0.01;
                torusKnot.rotation.y += 0.01;
                torusKnot.position.y = 2.5 + Math.sin(time) * 0.2;
            }

            if (brainSphere) {
                brainSphere.rotation.y += 0.02;
                brainSphere.rotation.z += 0.01;
                brainSphere.position.y = 1.4 + Math.sin(time * 2) * 0.1;
            }
            
            if (core) {
                core.rotation.y += 0.005;
                core.children[0].rotation.x += 0.01;
            }

            renderer.render(scene, camera);
        }

        // --- SCROLL ANIMATION ---
        gsap.registerPlugin(ScrollTrigger);

        function setupScroll() {
            gsap.to(camera.position, {
                z: 42,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                }
            });

            gsap.to(camera.rotation, {
                x: -0.2,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
        }

        window.addEventListener('resize', () => {
            updateCameraFov();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        window.onload = () => {
            init3D();
            setupScroll();
        };