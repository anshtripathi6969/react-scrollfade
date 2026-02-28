
import { ScrollFade } from './components/ScrollFade';
import './App.css';

const Card = ({ title, content }: { title: string, content: string }) => (
    <div className="card">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>ScrollFade Demo</h1>
                <p>Scroll down to see the magic ✨</p>
            </header>

            <main className="content">
                <section className="section">
                    <h2>Default (Up, Once)</h2>
                    <ScrollFade>
                        <Card title="Fade In Up" content="This card fades in from the bottom." />
                    </ScrollFade>
                </section>

                <section className="section">
                    <h2>Different Directions</h2>
                    <div className="grid">
                        <ScrollFade direction="left">
                            <Card title="From Left" content="Distance is 20px by default." />
                        </ScrollFade>

                        <ScrollFade direction="right" delay={200}>
                            <Card title="From Right (Delayed)" content="This has a 200ms delay." />
                        </ScrollFade>

                        <ScrollFade direction="down" duration={1000}>
                            <Card title="From Top (Slow)" content="This takes 1000ms to fade in." />
                        </ScrollFade>
                    </div>
                </section>

                <section className="section">
                    <h2>Repeat Mode</h2>
                    <p className="subtitle">Scroll up and down. These elements will disappear and reappear.</p>

                    <ScrollFade once={false} distance={50}>
                        <Card title="Repeat 1" content="once={false} distance={50}" />
                    </ScrollFade>

                    <ScrollFade once={false} delay={150} direction="left">
                        <Card title="Repeat 2" content="once={false} delayed left" />
                    </ScrollFade>

                    <ScrollFade once={false} delay={300} direction="right">
                        <Card title="Repeat 3" content="once={false} delayed right" />
                    </ScrollFade>
                </section>

                <section className="section spacer">
                    <h2>End of Demo</h2>
                </section>
            </main>
        </div>
    );
}

export default App;
