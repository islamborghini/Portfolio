import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="text-3xl font-medium text-neutral-100 mb-6">Achievements</h2>
      <div className="flex flex-col gap-4">
        {ACHIEVEMENTS.map((achievement, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-800 p-5 hover:border-neutral-700 transition-colors"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {achievement.photo && (
                <div className="w-full sm:w-40 flex-shrink-0">
                  <img
                    src={achievement.photo}
                    alt={achievement.title}
                    className="rounded object-cover w-full sm:w-40 h-auto"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-base font-medium text-neutral-100">{achievement.title}</h3>
                  <span className="text-sm text-neutral-500">{achievement.year}</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
