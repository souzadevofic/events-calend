import { SectionCard } from "../../Components/SectionCard/SectionCard"
import { Section } from "../../Components/Section/Section"
import Layout from '../Layout/Layout'


export function HomePage() {
    return (
        <>
            <Layout>
                <SectionCard />
                <Section />
            </Layout>
        </>
    )
}