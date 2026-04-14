const skills = [
  "JavaScript", "Node.js", "Express.js", "MongoDB", "REST API", "MVC Architecture",
  "JWT Authentication", "RBAC", "Password Hashing", "Postman", "Git", "GitHub",
  "Razorpay", "Async/Await", "Error Handling", "Modular Backend Design", "Security",
  "API Development", "Database Design", "Production Readiness"
];

export default function SkillsTicker() {
  // Triple the skills to ensure smooth infinite scroll with such a long list
  const track = [...skills, ...skills, ...skills];

  return (
    <section className="mt-8 mb-4">
      <div className="ticker is-ticker bg-[#c6ff00] py-2 text-black overflow-hidden relative rotate-1 border-y-2 border-black box-border shadow-lg z-20">
        <div
          className="ticker-track flex items-center gap-8 whitespace-nowrap animate-marquee"
          style={{ animationDuration: "80s" }}
        >
          {track.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em]"
            >
              {skill}
              <span className="text-black/40"> </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
