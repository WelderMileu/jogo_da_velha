const $ = e => document.querySelector(e);
const campo = document.querySelectorAll(".campo");

const message = (msg) => $('.jogador_da_vez').innerHTML = msg;

let tabuleiro = [
	'','','',
	'','','',
	'','',''
];

let jogador_da_vez = "O"
let jogo_rolando = true

message(`Jogador da Vez: ${jogador_da_vez}`)

const logica_do_jogo = {
	verifica_posicao({ pos1, pos2, pos3, jogador }) {
		if (
			tabuleiro[pos1] === jogador && 
			tabuleiro[pos2] === jogador && 
			tabuleiro[pos3] === jogador
		) {
			jogador_da_vez = jogador
			jogo_rolando = false;
		}
	},

	valida_ganhador() {
		
		// Verifica jogador X
		this.verifica_posicao({
			pos1: 0,
			pos2: 1,
			pos3: 2,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 3,
			pos2: 4,
			pos3: 5,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 6,
			pos2: 7,
			pos3: 8,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 0,
			pos2: 4,
			pos3: 8,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 2,
			pos2: 4,
			pos3: 6,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 2,
			pos2: 4,
			pos3: 6,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 0,
			pos2: 3,
			pos3: 6,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 1,
			pos2: 4,
			pos3: 7,
			jogador: "X"
		});

		this.verifica_posicao({
			pos1: 2,
			pos2: 5,
			pos3: 8,
			jogador: "X"
		});

		// Verifica jogador O
		this.verifica_posicao({
			pos1: 0,
			pos2: 1,
			pos3: 2,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 3,
			pos2: 4,
			pos3: 5,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 6,
			pos2: 7,
			pos3: 8,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 0,
			pos2: 4,
			pos3: 8,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 2,
			pos2: 4,
			pos3: 6,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 2,
			pos2: 4,
			pos3: 6,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 0,
			pos2: 3,
			pos3: 6,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 1,
			pos2: 4,
			pos3: 7,
			jogador: "O"
		});

		this.verifica_posicao({
			pos1: 2,
			pos2: 5,
			pos3: 8,
			jogador: "O"
		});
	},

	reiniciar_jogo() {
		campo.forEach((elem, index) => {
			if(elem.innerHTML !== "") {
				elem.innerHTML = ""
				tabuleiro[index] = ""
			}
		})
		
		message(`Jogador da Vez: ${jogador_da_vez}`)
		jogo_rolando = true;
	}
}


campo.forEach((element, index) => {
	element.addEventListener('click', () => {
		const ponto_para_O = () => {
			if(jogo_rolando) {
				if(tabuleiro[index] === "") {
					element.innerHTML = "O"
					tabuleiro[index] = "O"
					jogador_da_vez = "X"
					
					logica_do_jogo.valida_ganhador()	

				}
			}
		}

		const ponto_para_X = () => {
			if(jogo_rolando) {
				if(tabuleiro[index] === "") {
					element.innerHTML = "X"
					tabuleiro[index] = "X"
					jogador_da_vez = "O"

					logica_do_jogo.valida_ganhador()
				}	
			}
			
		}
		
		jogador_da_vez === "O" ? 
			ponto_para_O() : 
			ponto_para_X();
		
		jogo_rolando ? 
			message(`Jogador da Vez: ${ jogador_da_vez }`) : 
			message(`Jogador ${ jogador_da_vez } Ganhou !!!`);
		
	})
})

// Evento para reiniciar partida 
$('.reiniciar').addEventListener('click', logica_do_jogo.reiniciar_jogo)

