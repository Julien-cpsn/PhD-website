import Layout from "@theme/Layout";
import CV from '@site/static/pdf/CV - en - Julien CAPOSIENA.pdf'

export default function CvPage() {
    return <Layout
        title="CV"
    >
        <div style={{ width: '100%', height: '420vh' }}>
            <object
                data={CV + "#toolbar=1&navpanes=0&scrollbar=1"}
                type="application/pdf"
                title="CV"
                width="100%"
                height="100%"
                style={{ background: 'none' }}
            />
        </div>

    </Layout>
}
