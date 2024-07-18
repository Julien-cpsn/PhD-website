import Layout from '@theme/Layout';
import Translate, {translate} from "@docusaurus/Translate";

export default function Home() {
  return (
    <Layout
      title={
        translate({
            message: 'Accueil',
            description: 'The homepage name'
        })
      }
      description="Page d'accueil">
      <main>
          <Translate>
             Travail en cours
          </Translate>
      </main>
    </Layout>
  );
}
