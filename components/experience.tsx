import type { Translation } from "../utils/types.ts";

const Milestone = (data: Translation["experience"]["jobs"][0]) => (
  <section>
    <div class="flex justify-between md:flex-col">
      <div class="md:order-2">
        <h4>{data.name}</h4>
        {data.stations.map((station) => (
          <div class="mb-2" key={station.role}>
            <h5 class="my-1">{station.role}</h5>
            <ul>
              {station.tasks.map((item: string) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p class="flex-shrink-0 md:order-1 md:mb-0.2">{data.date}</p>
    </div>
  </section>
);
const Experience = (data: { translation: Translation["experience"] }) => (
  <>
    <h3>{data.translation.title}</h3>
    <div class="space-y-3 lg:space-y-2">
      {data.translation.jobs.map((job) => (
        <Milestone
          key={job.name}
          {...job}
        />
      ))}
    </div>
  </>
);
export default Experience;
