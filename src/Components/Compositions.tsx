function Compositions() {
    return (
        <div className="Compositions">
            <div className="Compositions-wrapper">
                <h1 className="Compositions-header" id="Compositions">
                    Composition
                    <h1 className="Compositions-header-mirror">
                        Composition
                    </h1>
                </h1>
                <div className="Compositions-image">
                    <img className="Compositions-image" id="compositions-image" loading="lazy" alt="woman gazing seaward from the shoreline"/>
                    <div className="Composition-bio">
                        <div className="Composition-bio-text">
                            I’ve been composing since I was a child. I started by writing dozens of hymn arrangements to play at my church, then over time branched out into writing for ensembles. I mostly compose for piano – both original works and arrangements of existing songs. Much of my music is inspired by nature.
                            <br />
                            <br />
                            Currently I am working on my first album of piano solos. You can check out recordings below and on my YouTube channel.
                        </div>
                        <p className="Composition-video-title" id="composition-1">Sonata No. 1</p>
                        <iframe className="Composition-video-1" width="56.5%" height="20%" src="https://www.youtube.com/embed/-4Qk6Sbn8ho?rel=0&amp;showinfo=0&amp;rel=0" title="Sonata no.1 - Rebekah Shomsky" frameBorder="0" allow="fullscreen"></iframe>
                        <p className="Composition-video-title" id="composition-2">Sonata No. 2</p>
                        <iframe className="Composition-video-2" width="56.5%" height="20%" src="https://www.youtube.com/embed/wsuSI0-E3Uo?rel=0&amp;showinfo=0&amp;rel=0" title="Sonata no.1 - Rebekah Shomsky" frameBorder="0" allow="fullscreen"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compositions