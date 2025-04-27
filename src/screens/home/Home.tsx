
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[402px] h-[874px] bg-[#e2d8ce]">
      <div className="relative h-full">
        <div className="absolute w-full h-full top-0 left-0 [background:url(https://c.animaapp.com/m9zya50n7OZ9oB/img/iphone-16-pro---5.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="relative h-[537px] top-[337px] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
            <Card className="border-none bg-transparent">
              <CardContent className="flex flex-col w-[352px] items-start gap-8 pt-6 px-0 mx-auto">
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <h2 className="mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-normal">
                    CONNECTEZ VOUS À VOTRE COMPTE POUR PROFITER DE VOS AVANTAGES
                    ET SERVICES PERSONNALISÉS
                  </h2>
                  <p className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#cdcdcd] text-xs tracking-[0] leading-normal">
                    ACTIVEZ VOS NOTIFICATIONS POUR RECEVOIR DES CONTENUS
                    EXCLUSIFS, CONSEILS TENDANCES, LES NOUVEAUTÉS ET RÉASSORTS.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <Button
                  onClick={() => navigate("/login")}
                    variant="default"
                    className="w-full bg-white hover:bg-white/90 text-black rounded-none p-2.5"
                  >
                    <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs tracking-[0] leading-normal">
                      REGISTER
                    </span>
                  </Button>
                  <Button
                   onClick={() => navigate("/guest-login")}
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10 hover:text-white rounded-none p-2.5"
                  >
                    <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs tracking-[0] leading-normal">
                      CONTINUE AS A GUEST
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <h1 className="absolute top-[297px] left-[153px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-[60.5px] tracking-[0] leading-normal">
          LIVRR
        </h1>
      </div>
    </div>
  );
};
