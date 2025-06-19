import AgentCard from "@/components/AgentCard";
import Hero from "@/components/Hero";

function OurAgents() {
  return (
    <div>
      <Hero title="Our Agents" image="../images/agents/hero.png" />
      <section className="container pb-[100px] relative mt-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] items-center">
          <AgentCard
            image="../images/agent-Leasie.png"
            name="Leasie Willions"
          />
          <AgentCard
            image="../images/agent-johnson.png"
            name="Johnson Watson"
          />
          <AgentCard image="../images/agent-mark.png" name="Mark Allen" />
          <AgentCard image="../images/agent-andrew.png" name="Andrew Allen" />
          <AgentCard image="../images/agent-jesica.png" name="Jesica Roberts" />
          <AgentCard image="../images/agent-oliver.png" name="Oliver Brain" />
        </div>
        <img
          className="absolute right-0 bottom-[-25px] hidden xl:block xl:translate-x-[219%]"
          src="../images/agents-bottom.svg"
          alt="shape"
        />
      </section>
    </div>
  );
}

export default OurAgents;
