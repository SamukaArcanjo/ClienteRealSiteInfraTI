function AbstractGlobe() {
  return (
    <div className="abstract-globe">
      <div className="globe-sphere">
        {/* Linhas horizontais */}
        <div className="globe-line globe-horizontal globe-h1" />
        <div className="globe-line globe-horizontal globe-h2" />
        <div className="globe-line globe-horizontal globe-h3" />
        <div className="globe-line globe-horizontal globe-h4" />

        {/* Linhas verticais */}
        <div className="globe-line globe-vertical globe-v1" />
        <div className="globe-line globe-vertical globe-v2" />
        <div className="globe-line globe-vertical globe-v3" />
        <div className="globe-line globe-vertical globe-v4" />
      </div>
    </div>
  );
}

export default AbstractGlobe;
