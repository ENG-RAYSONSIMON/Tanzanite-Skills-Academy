export default function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Habari Tanzanite Skills Academy!",
      `Jina: ${data.get("name")}`,
      `Simu: ${data.get("phone")}`,
      `Programu: ${data.get("program")}`,
      `Lengo: ${data.get("message") || "Ningependa kupata maelezo zaidi."}`,
    ].join("\n");
    window.open(`https://wa.me/255749722722?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="contact section" id="mawasiliano">
        <div className="container contact-box reveal">
          <div className="contact-copy">
            <p className="eyebrow">Anza leo</p>
            <h2>Kesho yako bora<br/><em>inaanza hapa.</em></h2>
            <p>Tuambie unapotaka kufika. Tutakusaidia kuchagua programu inayokufaa.</p>
            <div className="contact-direct">
              <a href="https://wa.me/255749722722" target="_blank" rel="noreferrer"><span>◌</span><p><small>WhatsApp</small><strong>+255 749 722 722</strong></p></a>
              <a href="mailto:info@tanzaniteskills.ac.tz"><span>✉</span><p><small>Barua pepe</small><strong>info@tanzaniteskills.ac.tz</strong></p></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>Jina lako<input required name="name" placeholder="Andika jina" /></label>
              <label>Namba ya simu<input required name="phone" type="tel" placeholder="07xx xxx xxx" /></label>
            </div>
            <label>Programu unayopenda<select required name="program" defaultValue=""><option value="" disabled>Chagua programu</option><option>Maendeleo Binafsi</option><option>Fedha Binafsi</option><option>Maendeleo ya Kazi</option><option>Biashara & Ujasiriamali</option><option>Ujuzi wa Kidijitali</option><option>Uongozi</option></select></label>
            <label>Tuambie lengo lako<textarea name="message" rows="3" placeholder="Ningependa kujifunza..." /></label>
            <button className="button form-button" type="submit">Endelea WhatsApp <span>↗</span></button>
            <small className="privacy-note">Tutafungua WhatsApp na ujumbe wako tayari kutumwa.</small>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><a className="brand" href="#mwanzo"><span className="brand-mark"><i /><b>TS</b></span><span className="brand-name">Tanzanite <strong>Skills Academy</strong></span></a><p>Jifunze leo. Badilisha kesho yako.</p></div>
          <div><strong>Chunguza</strong><a href="#programu">Programu</a><a href="#kuhusu">Kuhusu sisi</a><a href="#ushuhuda">Dhamira yetu</a></div>
          <div><strong>Msaada</strong><a href="#maswali">Maswali</a><a href="#mawasiliano">Wasiliana nasi</a><a href="mailto:info@tanzaniteskills.ac.tz">Barua pepe</a></div>
          <div><strong>Tuandikie</strong><a href="https://wa.me/255749722722" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="tel:+255749722722">Piga simu ↗</a><a href="mailto:info@tanzaniteskills.ac.tz">Barua pepe ↗</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Tanzanite Skills Academy. Haki zote zimehifadhiwa.</span><a href="#mwanzo">Rudi juu ↑</a></div>
      </footer>
    </>
  );
}
