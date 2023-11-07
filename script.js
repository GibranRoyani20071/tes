const game = () => {
    let pScore = 0;
    let cScore = 0;
    let tScore = 0;

    // Start Game 
    const stargame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-Hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img")

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });
    };

    const game = () => {
        let pScore = 0;
        let cScore = 0;
        let tScore = 0;

        const stargame = () => {
            const playBtn = document.querySelector(".intro button");
            const introScreen = document.querySelector(".intro");
            const match = document.querySelector(".match");

            playBtn.addEventListener("click", () => {
                introScreen.classList.add("fadeOut");
                match.classList.add("fadeIn");
            });
          };


    const playMatch = () => {
        const options = document.querySelectorAll(".options-button");
        const playerHand = document.querySelector(".player-Hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img")

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });
    };

    const computerOptions = ["Batu", "Kertas", "Gunting"];

    Options.forEach(Option => {
        Option.addEventListener("click", function () {
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                compareHands(this.textContent, computerChoice);
                playerHand.src = `./Codingan Minigame/${this.textContent}.png`;
                computerHand.src = `./Codingan Minigame/${computerChoice}.png`;
            }, 2000);

            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
          });
        });
    };

      const updatescore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computerr-score c");
        const tieScore = document.querySelector(".tie-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        tieScore.textContent = tScore;

      };

      const winner = document.querySelector('.winner')
      const comparehands = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            winner.textContent = "seri";
            tScore++;
            updatescore();
            return;
        }

        if (playerChoice === "batu") {
            if (computerChoice === "gunting") {
                winner.textContent = "Kamu Menang";
                pScore++;
                updatescore();
                return;
            } else {
                winner.textContent = "Komputer Menang";
                cScore++;
                updatescore()
                return;
            }
        }

      if (playerChoice === "kertas") {
        if (computerChoice === "gunting") {
            winner.textContent = "Komputer Menang";
            cScore++;
            updatescore()
            return;
        } else {
            winner.textContent = "Kamu Menang";
            pScore++;
            updatescore()
            return;
        }
      }
      
      if (playerChoice === "gunting") {
        if (computerChoice === "batu") {
            winner.textContent = "Komputer Menang";
            cScore++;
            updatescore()
            return;
        } else {
            winner.textContent = "Kamu Menang";
            pScore++;
            updatescore()
            return;
        };
      };
    };
    
    stargame();
    playMatch();


};

game()