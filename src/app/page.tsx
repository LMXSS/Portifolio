import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Recommendations from './recommendations/page';
import Resume from './resume/page';

export default function Page() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Recommendations />
      <Resume />
    </div>
  );
}
