import { useState } from 'react';

export default function SpookyStory() {
  const [lang, setLang] = useState<LanguageKeys>('en');
  type LanguageKeys = 'es' | 'en' | 've';
  const histoyByLang: { es: string[]; en: string[]; ve: string[] } = {
    es: [
      `En las tierras lejanas de Arvendel, en lo más profundo de un castillo abandonado por siglos, vivía
      una figura envuelta en misterio y oscuridad: el Conde Costura. Su nombre era temido y susurrado solo
      en las sombras, ya que pocos habían vivido para contar la historia de sus encuentros con él.`,
      `El conde, en su
      vida mortal, había sido un sastre renombrado, capaz de confeccionar las
      prendas más deslumbrantes que cualquier noble podría desear. Se decía que su aguja y su hilo no solo cosían telas, sino que atrapaban sueños y
      deseos, creando vestimentas que ofrecían poder y belleza inimaginables. Su
      habilidad pronto atrajo la atención de aquellos que buscaban algo más que
      moda: los practicantes de la magia oscura.`,
      `Una noche, bajo una luna oscura
      y sin estrellas, un misterioso cliente llegó a su tienda. Vestido en
      túnicas negras y con ojos que reflejaban siglos de sabiduría maldita, el
      extraño le pidió al conde crear un traje que lo volviera inmortal. A cambio, le ofreció un pacto: poderes sobrenaturales más allá de la
      comprensión humana. Atraído por la tentación, el Conde Costura aceptó el
      trato.`,
      `El sastre trabajó durante semanas sin descanso, tejiendo su propio
      destino en cada puntada. Usó telas que brillaban bajo la luz de la luna,
      hilos que parecían susurrar secretos y agujas forjadas en el corazón de
      las sombras. Cuando terminó, el traje no solo cumplía con la promesa de
      inmortalidad, sino que también portaba una maldición: todo aquel que lo
      usara perdería su alma, atrapada para siempre en el tejido oscuro del
      traje.`,
      `El cliente misterioso, al ponerse la prenda, se desvaneció en el
      aire, dejando solo una risa siniestra. Pero el poder del traje no quedó
      inactivo. Consumido por su propia ambición y el pacto que había hecho, el
      Conde Costura fue transformado en una criatura de la noche.`,
      `Ya no era un
      simple mortal, sino un ser inmortal condenado a vagar por la eternidad,
      cosiendo y deshaciendo los hilos del destino. Desde entonces, el Conde
      Costura Tenebrosa se oculta en su castillo, rodeado de maniquíes vacíos y
      telas encantadas que parecen moverse por sí solas.`,
      `A los viajeros que se
      aventuran demasiado cerca, les ofrece vestimentas imbuidas con promesas de
      poder o belleza eterna. Pero siempre hay un precio. Los que aceptan sus
      prendas encuentran sus vidas entrelazadas con las oscuras fuerzas que
      habitan el hilo, perdiendo poco a poco su voluntad hasta que sus almas son
      absorbidas por el conde, convirtiéndolos en marionetas vivientes.`,
      `Se dice que el castillo del Conde Costura está lleno de sombras que cosen y
      descosen interminablemente, mientras susurran los nombres de aquellos que
      cayeron en su trampa. Pero también se cuenta que un héroe podría romper la
      maldición del conde si encontrara el hilo que ata su destino y lograra
      cortar el nudo que lo mantiene prisionero entre los muertos y los vivos.`,
      `Hasta ese día, el Conde Costura sigue esperando, tejiendo las
      tramas de las vidas de los incautos, mientras la oscuridad de su castillo
      se expande lentamente por todo el reino.`,
    ],
    en: [
      `In the distant lands of Arvendel, deep within a castle abandoned for centuries, lived a figure shrouded in mystery and darkness: Count Dark Stitch. His name was feared and whispered only in the shadows, for few had survived to tell the tale of their encounters with him.`,

      `In his mortal life, the count had been a renowned tailor, capable of crafting the most dazzling garments any noble could desire. It was said that his needle and thread not only sewed fabrics but also captured dreams and desires, creating clothing that offered unimaginable power and beauty. His skill soon attracted the attention of those seeking more than fashion: practitioners of dark magic.`,

      `One night, under a moonless, starless sky, a mysterious client arrived at his shop. Dressed in black robes and with eyes that reflected centuries of cursed wisdom, the stranger asked the count to create a suit that would make him immortal. In exchange, he offered a pact: supernatural powers beyond human comprehension. Drawn by temptation, Count Dark Stitch accepted the deal.`,

      `The tailor worked tirelessly for weeks, weaving his own fate into every stitch. He used fabrics that glowed under the moonlight, threads that seemed to whisper secrets, and needles forged in the heart of shadows. When he finished, the suit not only fulfilled the promise of immortality but also carried a curse: anyone who wore it would lose their soul, forever trapped in the dark fabric of the suit.`,

      `The mysterious client, upon donning the garment, vanished into thin air, leaving only a sinister laugh. But the power of the suit did not remain dormant. Consumed by his own ambition and the pact he had made, Count Dark Stitch was transformed into a creature of the night. He was no longer a mere mortal but an immortal being condemned to wander for eternity, sewing and undoing the threads of fate.`,

      `Since then, Count Dark Stitch has hidden in his castle, surrounded by empty mannequins and enchanted fabrics that seem to move on their own. To travelers who venture too close, he offers garments imbued with promises of power or eternal beauty. But there is always a price. Those who accept his clothing find their lives entangled with the dark forces woven into the thread, gradually losing their will until their souls are absorbed by the count, turning them into living puppets.`,

      `It is said that the castle of Count Dark Stitch is filled with shadows that sew and unsew endlessly, whispering the names of those who fell into his trap. But it is also told that a hero could break the count’s curse if they found the thread that binds his fate and managed to cut the knot that keeps him trapped between the dead and the living.`,

      `Until that day, Count Dark Stitch continues waiting, weaving the lives of the unwary, as the darkness of his castle slowly spreads across the kingdom.`,
    ],
    ve: [
      `En las tierras lejanas de Arvendel, en lo más profundo de un castillo abandonado por siglos, vivía
          una figura envuelta en misterio y oscuridad: el Conde Costura. Su nombre era temido y susurrado solo
          en las sombras, ya que pocos habían vivido pa' echar el cuento de haberselo encontrado.`,
      `El conde, en su
          vida mortal, había sido un sastre muy famoso, capaz de confeccionar las
          prendas más arrechas que cualquier noble podría desear. Se decía que su aguja y su hilo no solo cosían telas, sino que atrapaban sueños y
          deseos, creando vestimentas que ofrecían poder y belleza impelables. Su
          habilidad pronto llamó la atención de aquellos que buscaban algo más que
          moda: los practicantes de la brujería.`,
      `Una noche, bajo una luna oscura
          y sin estrellas, un cliente misterioso llegó a su tienda. Vestido en
          túnicas negras y con ojos que reflejaban siglos de maldición, el
          extraño le pidió al conde hacerle un traje que lo volviera inmortal. A cambio, le ofreció un trato: poderes sobrenaturales más allá de la
          comprensión humana. Picado por la curiosidad, el Conde Costura aceptó el
          trato.`,
      `El sastre trabajó durante semanas sin descanso, tejiendo su propio
          destino en cada puntada. Usó telas que brillaban bajo la luz de la luna,
          hilos que parecían susurrar secretos y agujas forjadas en el corazón de
          las sombras. Cuando terminó, el traje no solo cumplía con la promesa de
          inmortalidad, sino que también traía una maldición: todo aquel que lo
          usara perdería su alma, atrapada para siempre en el tejido oscuro del
          traje.`,
      `El cliente misterioso, al ponerse la prenda, se desvaneció en el
          aire, dejando solo una risa tenebrosa. Pero el poder del traje no quedó
          inactivo. Consumido por su propia ambición y el trato que había hecho, el
          Conde Costura fue convertido en una criatura de la noche.`,
      `Ya no era un
          simple mortal, sino un ser inmortal condenado a vagar por la eternidad,
          cosiendo y descosiendo los hilos del destino. Desde entonces, el Conde
          Costura se oculta en su castillo, rodeado de maniquíes vacíos y
          telas encantadas que parecen moverse solas.`,
      `A los que se
          acercan mucho, les ofrece vestimentas con promesas de
          poder o belleza eterna. Pero siempre hay un precio. Los que aceptan sus
          prendas ven sus vidas entrelazadas con las fuerzas oscuras que
          habitan el hilo, perdiendo poco a poco su voluntad hasta que sus almas son
          tragadas por el conde, convirtiéndolos en marionetas vivientes.`,
      `Se dice que el castillo del Conde Costura está lleno de sombras que cosen y
          descosen sin parar, mientras susurran los nombres de aquellos que
          cayeron en su trampa. Pero también se cuenta que un héroe podría romper la
          maldición del conde si encontrara el hilo que ata su destino y lograra
          cortar el nudo que lo mantiene atrapado entre los muertos y los vivos.`,
      `Hasta ese día, el Conde Costura sigue esperando, tejiendo las
          tramas de las vidas de los incautos, mientras la oscuridad de su castillo
          se expande poco a poco por todo el reino.`,
    ],
  };
  return (
    <>
      <div className="flex items-center w-full justify-center gap-12">
        <p
          onClick={() => {
            setLang('ve');
          }}
          className="cursor-pointer emoji"
        >
          &#x1F1FB;&#x1F1EA;
        </p>
        <p
          onClick={() => {
            setLang('es');
          }}
          className="cursor-pointer emoji"
        >
          &#x1F1EA;&#x1F1F8;
        </p>
        <p
          onClick={() => {
            setLang('en');
          }}
          className="cursor-pointer emoji"
        >
          &#x1F1FA;&#x1F1F8;
        </p>
      </div>
      <p className="text-center font-bold text-[48px] text-[#9d00ff] ">
        The Story of Count Stitch
      </p>
      <div className="w-full flex flex-col items-center justify-center px-[12px] sm:px-[0px] ">
        {histoyByLang[lang].map((historypart) => {
          return (
            <div className="max-w-[80ch]">
              <p id={historypart} className="text-cen">
                {historypart}
              </p>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
