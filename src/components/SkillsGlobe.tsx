import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Vector3, Group } from "three";

// Skills data with categories
const skills = [
  // Tech skills (#6C5CE7)
  { name: "Python", lat: 15, lon: 360, color: "#6C5CE7", category: "tech" }, // New York
  { name: "SQL", lat: 30, lon: 345, color: "#6C5CE7", category: "tech" }, // San Francisco
  {
    name: "JavaScript",
    lat: 45.0,
    lon: 357.1,
    color: "#6C5CE7",
    category: "tech",
  }, // Los Angeles

  // Web Technologies
  { name: "HTML5", lat: -35, lon: -50, color: "#6C5CE7", category: "tech" }, // Paris
  { name: "CSS3", lat: -10, lon: -70, color: "#6C5CE7", category: "tech" }, // Frankfurt (not Berlin → spacing)
  {
    name: "React.js",
    lat: -4,
    lon: -60,
    color: "#6C5CE7",
    category: "tech",
  }, // London
  {
    name: "Three.js",
    lat: -1.9,
    lon: 12.5,
    color: "#6C5CE7",
    category: "tech",
  }, // Rome
  {
    name: "TailwindCSS",
    lat: -20,
    lon: 1,
    color: "#6C5CE7",
    category: "tech",
  }, // St. Petersburg (not Moscow)

  // Databases
  { name: "MySQL", lat: 24, lon: -90, color: "#6C5CE7", category: "tech" }, // Singapore
  {
    name: "MongoDB",
    lat: 30,
    lon: -60,
    color: "#6C5CE7",
    category: "tech",
  }, // Tokyo

  // AI / ML / NLP
  { name: "RAG", lat: 45.4, lon: -120, color: "#6C5CE7", category: "tech" }, // Milan
  {
    name: "LangChain",
    lat: 55,
    lon: -140,
    color: "#6C5CE7",
    category: "tech",
  }, // Toronto
  {
    name: "LangGraph",
    lat: 20,
    lon: -150,
    color: "#6C5CE7",
    category: "tech",
  }, // Helsinki (not Stockholm)

  // Backend Frameworks
  { name: "Flask", lat: 60, lon: 130, color: "#6C5CE7", category: "tech" }, // Mumbai
  { name: "Celery", lat: 30, lon: 100, color: "#6C5CE7", category: "tech" }, // Chennai (not Delhi)
  {
    name: "RabbitMQ",
    lat: 22.5,
    lon: 133,
    color: "#6C5CE7",
    category: "tech",
  }, // Kolkata (spacing from others)

  // Tools
  { name: "Git", lat: -33.9, lon: 151.2, color: "#6C5CE7", category: "tech" }, // Sydney
  {
    name: "VS Code",
    lat: -30.8,
    lon: 120.7,
    color: "#6C5CE7",
    category: "tech",
  }, // Auckland (not Melbourne)

  // Soft skills (#55EFC4)
  {
    name: "Communication",
    lat: -9.9,
    lon: -43.1,
    color: "#55EFC4",
    category: "soft",
  }, // Rio
  {
    name: "Leadership",
    lat: 70,
    lon: 72,
    color: "#55EFC4",
    category: "soft",
  }, // Netherlands
  {
    name: "Problem Solving",
    lat: 60,
    lon: -90.1,
    color: "#55EFC4",
    category: "soft",
  }, // Mexico City

  // Creative skills (white)
  {
    name: "Video Editing",
    lat: 15.0,
    lon: 31.2,
    color: "#ffffff",
    category: "creative",
  }, // Cairo
  {
    name: "UI/UX Design",
    lat: 10,
    lon: 66.3,
    color: "#ffffff",
    category: "creative",
  }, // Dubai
  {
    name: "Photography",
    lat: 50,
    lon: 66.3,
    color: "#ffffff",
    category: "creative",
  }, // Nairobi
];

function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new Vector3(x, y, z);
}

function GlobeModel() {
  const globeRef = useRef<Group>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  // Create dotted continents
  const createDottedGlobe = () => {
    const particles = [];
    const radius = 1.5; // Decreased from 2

    for (let lat = -90; lat <= 90; lat += 3) {
      for (let lon = -180; lon <= 180; lon += 3) {
        const isLand =
          (lat > -35 && lat < 60 && lon > -20 && lon < 50) ||
          (lat > 0 && lat < 70 && lon > 50 && lon < 140) ||
          (lat > 15 && lat < 70 && lon > -160 && lon < -50) ||
          (lat > -55 && lat < 15 && lon > -80 && lon < -35) ||
          (lat > -40 && lat < -10 && lon > 110 && lon < 155);

        if (isLand && Math.random() > 0.3) {
          const pos = latLonToVector3(lat, lon, radius);
          particles.push(pos.x, pos.y, pos.z);
        }
      }
    }

    return new Float32Array(particles);
  };

  const particles = createDottedGlobe();

  return (
    <group ref={globeRef}>
      {/* Dotted continents */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#888888"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Wireframe globe */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} /> {/* Decreased from 2 */}
        <meshBasicMaterial
          color="#222222"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.1, 0.01, 16, 100]} /> {/* Decreased from 2.8 */}
        <meshBasicMaterial color="#6C5CE7" transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.95, 0.01, 16, 100]} />{" "}
        {/* Decreased from 2.6 */}
        <meshBasicMaterial color="#55EFC4" transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[Math.PI / 4, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} /> {/* Decreased from 2.4 */}
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>

      {/* Skill nodes */}
      {skills.map((skill, i) => {
        const pos = latLonToVector3(skill.lat, skill.lon, 1.58); // Adjusted position
        const isBottom = pos.y < 0; // Check if skill is on bottom half of globe

        return (
          <group key={i}>
            {/* Center node */}
            <mesh position={[pos.x, pos.y, pos.z]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color={skill.color} />
            </mesh>

            {/* Concentric rings */}
            <mesh
              position={[pos.x, pos.y, pos.z]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <torusGeometry args={[0.08, 0.003, 16, 32]} />
              <meshBasicMaterial
                color={skill.color}
                transparent
                opacity={0.6}
              />
            </mesh>
            <mesh
              position={[pos.x, pos.y, pos.z]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <torusGeometry args={[0.12, 0.003, 16, 32]} />
              <meshBasicMaterial
                color={skill.color}
                transparent
                opacity={0.4}
              />
            </mesh>
            <mesh
              position={[pos.x, pos.y, pos.z]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <torusGeometry args={[0.16, 0.003, 16, 32]} />
              <meshBasicMaterial
                color={skill.color}
                transparent
                opacity={0.2}
              />
            </mesh>

            {/* Vertical line extending from node - direction based on position */}
            <mesh position={[pos.x, pos.y + (isBottom ? -0.3 : 0.3), pos.z]}>
              <cylinderGeometry args={[0.002, 0.002, 0.6, 8]} />
              <meshBasicMaterial
                color={skill.color}
                transparent
                opacity={0.6}
              />
            </mesh>

            {/* Label at end of line */}
            <Html
              position={[pos.x, pos.y + (isBottom ? -0.65 : 0.65), pos.z]}
              distanceFactor={8}
            >
              <div className="flex flex-col items-center pointer-events-none">
                <div
                  className="w-1.5 h-1.5 rounded-full mb-1"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 8px ${skill.color}`,
                  }}
                />
                <span
                  className="text-white text-[10px] whitespace-nowrap tracking-wide"
                  style={{ textShadow: "0 0 4px rgba(0,0,0,0.8)" }}
                >
                  {skill.name}
                </span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function SkillsGlobe() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GlobeModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
