import { useState } from "react";

export default function Subscribe() {
  // State pour l'email
  const [email, setEmail] = useState("");
  // State pour désactiver le bouton
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State pour le checkbox
  const [agreed, setAgreed] = useState(false);
  // State pour afficher le message
  const [message, setMessage] = useState("");

  // Fonction pour gérer le submit
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    if (agreed) {
      console.log("Formulaire soumis");
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("✓ Subscribed successfully!");
      setEmail("");
    } catch (_error) {
      setMessage("✗ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mt-6 md:mt-12">
      <div className="space-y-4 ">
        <p className=" text-sm sm:text-base text-foreground font-medium">
          Join our newsletter for trip tips and <br /> travel news!
        </p>
        {/* formualaire */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:gap-6  ">
            {/* input  */}
            <div className="relative w-full sm:w-auto flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" w-full pl-2 pr-4 py-4 bg-[#F9F9F9] border border-[#F2F2F5] rounded-md placeholder:text-[#A9A9A9A] focus:outline-none focus:border-primary transition-colors duration-200"
                placeholder="pacomeahossi175@gmail.com"
              />
            </div>
            {/* checkbox */}
            <div className="flex gap-4 items-start">
              <div>
                <input
                  type="checkbox"
                  checked={agreed}
                  id="agree"
                  className="focus:outline-none "
                  onChange={(e) => setAgreed(e.target.checked)}
                />
              </div>
              <label
                htmlFor="agree"
                className="text-xs sm:text-base text-foreground font-medium "
              >
                I agree to receive other communications <br /> from D-ID.
              </label>
            </div>
            {/* Bouton */}
            <div className="relative">
              <button
                type="submit"
                disabled={!agreed}
                className="flex flex-1 items-center justify-center py-4 text-primary-foreground text-sm md:text-lg  font-medium bg-primary rounded-[99px] cursor-pointer capitalize hover:bg-primary/90 transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
          {/* Affichage du message de succès ou d'échec */}
          {message && (
            <p
              className={`mt-4 md:mt-6 text-sm text-center ${
                message.includes("✗") ? "text-red-400" : "text-primary"
              } `}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
