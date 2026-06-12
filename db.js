// Banco de Dados Simulado em localStorage para o Bolão da Copa Premium 2026

const DB_KEY = 'bolao_copa_data';

// 1. Definição dos Grupos da Copa 2026
const defaultGroups = [
    { id: 'A', nome: 'Grupo A' },
    { id: 'B', nome: 'Grupo B' },
    { id: 'C', nome: 'Grupo C' },
    { id: 'D', nome: 'Grupo D' },
    { id: 'E', nome: 'Grupo E' },
    { id: 'F', nome: 'Grupo F' },
    { id: 'G', nome: 'Grupo G' },
    { id: 'H', nome: 'Grupo H' },
    { id: 'I', nome: 'Grupo I' },
    { id: 'J', nome: 'Grupo J' },
    { id: 'K', nome: 'Grupo K' },
    { id: 'L', nome: 'Grupo L' }
];

// 2. Definição das 48 Seleções (4 por grupo)
const defaultTeams = [
    // Grupo A
    { id: 'mex', grupo_id: 'A', nome: 'México', sigla: 'MEX', emoji: '🇲🇽', escudo: '' },
    { id: 'rsa', grupo_id: 'A', nome: 'África do Sul', sigla: 'RSA', emoji: '🇿🇦', escudo: '' },
    { id: 'kor', grupo_id: 'A', nome: 'Coreia do Sul', sigla: 'KOR', emoji: '🇰🇷', escudo: '' },
    { id: 'cze', grupo_id: 'A', nome: 'República Tcheca', sigla: 'CZE', emoji: '🇨🇿', escudo: '' },
    // Grupo B
    { id: 'can', grupo_id: 'B', nome: 'Canadá', sigla: 'CAN', emoji: '🇨🇦', escudo: '' },
    { id: 'bih', grupo_id: 'B', nome: 'Bósnia e Herzegovina', sigla: 'BIH', emoji: '🇧🇦', escudo: '' },
    { id: 'qat', grupo_id: 'B', nome: 'Catar', sigla: 'QAT', emoji: '🇶🇦', escudo: '' },
    { id: 'sui', grupo_id: 'B', nome: 'Suíça', sigla: 'SUI', emoji: '🇨🇭', escudo: '' },
    // Grupo C
    { id: 'bra', grupo_id: 'C', nome: 'Brasil', sigla: 'BRA', emoji: '🇧🇷', escudo: '' },
    { id: 'mar', grupo_id: 'C', nome: 'Marrocos', sigla: 'MAR', emoji: '🇲🇦', escudo: '' },
    { id: 'sco', grupo_id: 'C', nome: 'Escócia', sigla: 'SCO', emoji: '🏴\u200d󠁧󠁢󠁳󠁣󠁴󠁿', escudo: '' },
    { id: 'hai', grupo_id: 'C', nome: 'Haiti', sigla: 'HAI', emoji: '🇭🇹', escudo: '' },
    // Grupo D
    { id: 'usa', grupo_id: 'D', nome: 'Estados Unidos', sigla: 'USA', emoji: '🇺🇸', escudo: '' },
    { id: 'par', grupo_id: 'D', nome: 'Paraguai', sigla: 'PAR', emoji: '🇵🇾', escudo: '' },
    { id: 'aus', grupo_id: 'D', nome: 'Austrália', sigla: 'AUS', emoji: '🇦🇺', escudo: '' },
    { id: 'tur', grupo_id: 'D', nome: 'Turquia', sigla: 'TUR', emoji: '🇹🇷', escudo: '' },
    // Grupo E
    { id: 'ger', grupo_id: 'E', nome: 'Alemanha', sigla: 'GER', emoji: '🇩🇪', escudo: '' },
    { id: 'cuw', grupo_id: 'E', nome: 'Curaçao', sigla: 'CUW', emoji: '🇨🇼', escudo: '' },
    { id: 'civ', grupo_id: 'E', nome: 'Costa do Marfim', sigla: 'CIV', emoji: '🇨🇮', escudo: '' },
    { id: 'ecu', grupo_id: 'E', nome: 'Equador', sigla: 'ECU', emoji: '🇪🇨', escudo: '' },
    // Grupo F
    { id: 'ned', grupo_id: 'F', nome: 'Holanda', sigla: 'NED', emoji: '🇳🇱', escudo: '' },
    { id: 'jpn', grupo_id: 'F', nome: 'Japão', sigla: 'JPN', emoji: '🇯🇵', escudo: '' },
    { id: 'tun', grupo_id: 'F', nome: 'Tunísia', sigla: 'TUN', emoji: '🇹🇳', escudo: '' },
    { id: 'swe', grupo_id: 'F', nome: 'Suécia', sigla: 'SWE', emoji: '🇸🇪', escudo: '' },
    // Grupo G
    { id: 'bel', grupo_id: 'G', nome: 'Bélgica', sigla: 'BEL', emoji: '🇧🇪', escudo: '' },
    { id: 'irn', grupo_id: 'G', nome: 'Irã', sigla: 'IRN', emoji: '🇮🇷', escudo: '' },
    { id: 'egy', grupo_id: 'G', nome: 'Egito', sigla: 'EGY', emoji: '🇪🇬', escudo: '' },
    { id: 'nzl', grupo_id: 'G', nome: 'Nova Zelândia', sigla: 'NZL', emoji: '🇳🇿', escudo: '' },
    // Grupo H
    { id: 'esp', grupo_id: 'H', nome: 'Espanha', sigla: 'ESP', emoji: '🇪🇸', escudo: '' },
    { id: 'uru', grupo_id: 'H', nome: 'Uruguai', sigla: 'URU', emoji: '🇺🇾', escudo: '' },
    { id: 'ksa', grupo_id: 'H', nome: 'Arábia Saudita', sigla: 'KSA', emoji: '🇸🇦', escudo: '' },
    { id: 'cpv', grupo_id: 'H', nome: 'Cabo Verde', sigla: 'CPV', emoji: '🇨🇻', escudo: '' },
    // Grupo I
    { id: 'fra', grupo_id: 'I', nome: 'França', sigla: 'FRA', emoji: '🇫🇷', escudo: '' },
    { id: 'sen', grupo_id: 'I', nome: 'Senegal', sigla: 'SEN', emoji: '🇸🇳', escudo: '' },
    { id: 'nor', grupo_id: 'I', nome: 'Noruega', sigla: 'NOR', emoji: '🇳🇴', escudo: '' },
    { id: 'irq', grupo_id: 'I', nome: 'Iraque', sigla: 'IRQ', emoji: '🇮🇶', escudo: '' },
    // Grupo J
    { id: 'arg', grupo_id: 'J', nome: 'Argentina', sigla: 'ARG', emoji: '🇦🇷', escudo: '' },
    { id: 'aut', grupo_id: 'J', nome: 'Áustria', sigla: 'AUT', emoji: '🇦🇹', escudo: '' },
    { id: 'alg', grupo_id: 'J', nome: 'Argélia', sigla: 'ALG', emoji: '🇩🇿', escudo: '' },
    { id: 'jor', grupo_id: 'J', nome: 'Jordânia', sigla: 'JOR', emoji: '🇯🇴', escudo: '' },
    // Grupo K
    { id: 'por', grupo_id: 'K', nome: 'Portugal', sigla: 'POR', emoji: '🇵🇹', escudo: '' },
    { id: 'col', grupo_id: 'K', nome: 'Colômbia', sigla: 'COL', emoji: '🇨🇴', escudo: '' },
    { id: 'uzb', grupo_id: 'K', nome: 'Uzbequistão', sigla: 'UZB', emoji: '🇺🇿', escudo: '' },
    { id: 'cod', grupo_id: 'K', nome: 'República Democrática do Congo', sigla: 'COD', emoji: '🇨🇩', escudo: '' },
    // Grupo L
    { id: 'eng', grupo_id: 'L', nome: 'Inglaterra', sigla: 'ENG', emoji: '🏴\u200d󠁧󠁢󠁥󠁮󠁧󠁿', escudo: '' },
    { id: 'cro', grupo_id: 'L', nome: 'Croácia', sigla: 'CRO', emoji: '🇭🇷', escudo: '' },
    { id: 'pan', grupo_id: 'L', nome: 'Panamá', sigla: 'PAN', emoji: '🇵🇦', escudo: '' },
    { id: 'gha', grupo_id: 'L', nome: 'Gana', sigla: 'GHA', emoji: '🇬🇭', escudo: '' }
];

// 3. Geração dos Jogos da Fase de Grupos
// 3. Geração dos Jogos da Fase de Grupos
function gerarJogosIniciais() {
    const rawMatches = [
        // Rodada 1
        { id: 'match_A_r1_1', gid: 'A', r: 'Rodada 1', home: 'mex', away: 'rsa', time: '2026-06-11T13:00:00', label: '11 JUN • 13:00', resH: 2, resA: 0, status: 'Finalizado' },
        { id: 'match_A_r1_2', gid: 'A', r: 'Rodada 1', home: 'kor', away: 'cze', time: '2026-06-11T16:00:00', label: '11 JUN • 16:00', resH: 2, resA: 1, status: 'Finalizado' },
        { id: 'match_B_r1_1', gid: 'B', r: 'Rodada 1', home: 'can', away: 'bih', time: '2026-06-11T19:00:00', label: '11 JUN • 19:00' },
        { id: 'match_B_r1_2', gid: 'B', r: 'Rodada 1', home: 'qat', away: 'sui', time: '2026-06-11T22:00:00', label: '11 JUN • 22:00' },
        
        { id: 'match_C_r1_1', gid: 'C', r: 'Rodada 1', home: 'bra', away: 'mar', time: '2026-06-12T13:00:00', label: '12 JUN • 13:00' },
        { id: 'match_C_r1_2', gid: 'C', r: 'Rodada 1', home: 'hai', away: 'sco', time: '2026-06-12T16:00:00', label: '12 JUN • 16:00' },
        { id: 'match_D_r1_1', gid: 'D', r: 'Rodada 1', home: 'usa', away: 'par', time: '2026-06-12T19:00:00', label: '12 JUN • 19:00' },
        { id: 'match_D_r1_2', gid: 'D', r: 'Rodada 1', home: 'aus', away: 'tur', time: '2026-06-12T22:00:00', label: '12 JUN • 22:00' },
        
        { id: 'match_E_r1_1', gid: 'E', r: 'Rodada 1', home: 'ger', away: 'cuw', time: '2026-06-13T13:00:00', label: '13 JUN • 13:00' },
        { id: 'match_E_r1_2', gid: 'E', r: 'Rodada 1', home: 'civ', away: 'ecu', time: '2026-06-13T16:00:00', label: '13 JUN • 16:00' },
        { id: 'match_F_r1_1', gid: 'F', r: 'Rodada 1', home: 'ned', away: 'jpn', time: '2026-06-13T19:00:00', label: '13 JUN • 19:00' },
        { id: 'match_F_r1_2', gid: 'F', r: 'Rodada 1', home: 'swe', away: 'tun', time: '2026-06-13T22:00:00', label: '13 JUN • 22:00' },
        
        { id: 'match_G_r1_1', gid: 'G', r: 'Rodada 1', home: 'bel', away: 'egy', time: '2026-06-14T13:00:00', label: '14 JUN • 13:00' },
        { id: 'match_G_r1_2', gid: 'G', r: 'Rodada 1', home: 'irn', away: 'nzl', time: '2026-06-14T16:00:00', label: '14 JUN • 16:00' },
        { id: 'match_H_r1_1', gid: 'H', r: 'Rodada 1', home: 'esp', away: 'cpv', time: '2026-06-14T19:00:00', label: '14 JUN • 19:00' },
        { id: 'match_H_r1_2', gid: 'H', r: 'Rodada 1', home: 'ksa', away: 'uru', time: '2026-06-14T22:00:00', label: '14 JUN • 22:00' },
        
        { id: 'match_I_r1_1', gid: 'I', r: 'Rodada 1', home: 'fra', away: 'sen', time: '2026-06-15T13:00:00', label: '15 JUN • 13:00' },
        { id: 'match_I_r1_2', gid: 'I', r: 'Rodada 1', home: 'irq', away: 'nor', time: '2026-06-15T16:00:00', label: '15 JUN • 16:00' },
        { id: 'match_J_r1_1', gid: 'J', r: 'Rodada 1', home: 'arg', away: 'alg', time: '2026-06-15T19:00:00', label: '15 JUN • 19:00' },
        { id: 'match_J_r1_2', gid: 'J', r: 'Rodada 1', home: 'aut', away: 'jor', time: '2026-06-15T22:00:00', label: '15 JUN • 22:00' },
        
        { id: 'match_K_r1_1', gid: 'K', r: 'Rodada 1', home: 'por', away: 'cod', time: '2026-06-16T13:00:00', label: '16 JUN • 13:00' },
        { id: 'match_K_r1_2', gid: 'K', r: 'Rodada 1', home: 'col', away: 'uzb', time: '2026-06-16T16:00:00', label: '16 JUN • 16:00' },
        { id: 'match_L_r1_1', gid: 'L', r: 'Rodada 1', home: 'eng', away: 'cro', time: '2026-06-16T19:00:00', label: '16 JUN • 19:00' },
        { id: 'match_L_r1_2', gid: 'L', r: 'Rodada 1', home: 'gha', away: 'pan', time: '2026-06-16T22:00:00', label: '16 JUN • 22:00' },

        // Rodada 2
        { id: 'match_A_r2_1', gid: 'A', r: 'Rodada 2', home: 'mex', away: 'cze', time: '2026-06-17T13:00:00', label: '17 JUN • 13:00' },
        { id: 'match_A_r2_2', gid: 'A', r: 'Rodada 2', home: 'rsa', away: 'kor', time: '2026-06-17T16:00:00', label: '17 JUN • 16:00' },
        { id: 'match_B_r2_1', gid: 'B', r: 'Rodada 2', home: 'can', away: 'sui', time: '2026-06-17T19:00:00', label: '17 JUN • 19:00' },
        { id: 'match_B_r2_2', gid: 'B', r: 'Rodada 2', home: 'bih', away: 'qat', time: '2026-06-17T22:00:00', label: '17 JUN • 22:00' },
        
        { id: 'match_C_r2_1', gid: 'C', r: 'Rodada 2', home: 'bra', away: 'sco', time: '2026-06-18T13:00:00', label: '18 JUN • 13:00' },
        { id: 'match_C_r2_2', gid: 'C', r: 'Rodada 2', home: 'mar', away: 'hai', time: '2026-06-18T16:00:00', label: '18 JUN • 16:00' },
        { id: 'match_D_r2_1', gid: 'D', r: 'Rodada 2', home: 'usa', away: 'tur', time: '2026-06-18T19:00:00', label: '18 JUN • 19:00' },
        { id: 'match_D_r2_2', gid: 'D', r: 'Rodada 2', home: 'par', away: 'aus', time: '2026-06-18T22:00:00', label: '18 JUN • 22:00' },
        
        { id: 'match_E_r2_1', gid: 'E', r: 'Rodada 2', home: 'ger', away: 'ecu', time: '2026-06-19T13:00:00', label: '19 JUN • 13:00' },
        { id: 'match_E_r2_2', gid: 'E', r: 'Rodada 2', home: 'cuw', away: 'civ', time: '2026-06-19T16:00:00', label: '19 JUN • 16:00' },
        { id: 'match_F_r2_1', gid: 'F', r: 'Rodada 2', home: 'ned', away: 'tun', time: '2026-06-19T19:00:00', label: '19 JUN • 19:00' },
        { id: 'match_F_r2_2', gid: 'F', r: 'Rodada 2', home: 'jpn', away: 'swe', time: '2026-06-19T22:00:00', label: '19 JUN • 22:00' },
        
        { id: 'match_G_r2_1', gid: 'G', r: 'Rodada 2', home: 'bel', away: 'nzl', time: '2026-06-20T13:00:00', label: '20 JUN • 13:00' },
        { id: 'match_G_r2_2', gid: 'G', r: 'Rodada 2', home: 'egy', away: 'irn', time: '2026-06-20T16:00:00', label: '20 JUN • 16:00' },
        { id: 'match_H_r2_1', gid: 'H', r: 'Rodada 2', home: 'esp', away: 'uru', time: '2026-06-20T19:00:00', label: '20 JUN • 19:00' },
        { id: 'match_H_r2_2', gid: 'H', r: 'Rodada 2', home: 'cpv', away: 'ksa', time: '2026-06-20T22:00:00', label: '20 JUN • 22:00' },
        
        { id: 'match_I_r2_1', gid: 'I', r: 'Rodada 2', home: 'fra', away: 'nor', time: '2026-06-21T13:00:00', label: '21 JUN • 13:00' },
        { id: 'match_I_r2_2', gid: 'I', r: 'Rodada 2', home: 'sen', away: 'irq', time: '2026-06-21T16:00:00', label: '21 JUN • 16:00' },
        { id: 'match_J_r2_1', gid: 'J', r: 'Rodada 2', home: 'arg', away: 'jor', time: '2026-06-21T19:00:00', label: '21 JUN • 19:00' },
        { id: 'match_J_r2_2', gid: 'J', r: 'Rodada 2', home: 'alg', away: 'aut', time: '2026-06-21T22:00:00', label: '21 JUN • 22:00' },
        
        { id: 'match_K_r2_1', gid: 'K', r: 'Rodada 2', home: 'por', away: 'uzb', time: '2026-06-22T13:00:00', label: '22 JUN • 13:00' },
        { id: 'match_K_r2_2', gid: 'K', r: 'Rodada 2', home: 'cod', away: 'col', time: '2026-06-22T16:00:00', label: '22 JUN • 16:00' },
        { id: 'match_L_r2_1', gid: 'L', r: 'Rodada 2', home: 'eng', away: 'pan', time: '2026-06-22T19:00:00', label: '22 JUN • 19:00' },
        { id: 'match_L_r2_2', gid: 'L', r: 'Rodada 2', home: 'cro', away: 'gha', time: '2026-06-22T22:00:00', label: '22 JUN • 22:00' },

        // Rodada 3
        { id: 'match_A_r3_1', gid: 'A', r: 'Rodada 3', home: 'mex', away: 'kor', time: '2026-06-23T13:00:00', label: '23 JUN • 13:00' },
        { id: 'match_A_r3_2', gid: 'A', r: 'Rodada 3', home: 'cze', away: 'rsa', time: '2026-06-23T13:00:00', label: '23 JUN • 13:00' },
        { id: 'match_B_r3_1', gid: 'B', r: 'Rodada 3', home: 'can', away: 'qat', time: '2026-06-23T18:00:00', label: '23 JUN • 18:00' },
        { id: 'match_B_r3_2', gid: 'B', r: 'Rodada 3', home: 'sui', away: 'bih', time: '2026-06-23T18:00:00', label: '23 JUN • 18:00' },
        { id: 'match_C_r3_1', gid: 'C', r: 'Rodada 3', home: 'bra', away: 'hai', time: '2026-06-23T21:00:00', label: '23 JUN • 21:00' },
        { id: 'match_C_r3_2', gid: 'C', r: 'Rodada 3', home: 'mar', away: 'sco', time: '2026-06-23T21:00:00', label: '23 JUN • 21:00' },
        
        { id: 'match_D_r3_1', gid: 'D', r: 'Rodada 3', home: 'usa', away: 'aus', time: '2026-06-24T13:00:00', label: '24 JUN • 13:00' },
        { id: 'match_D_r3_2', gid: 'D', r: 'Rodada 3', home: 'tur', away: 'par', time: '2026-06-24T13:00:00', label: '24 JUN • 13:00' },
        { id: 'match_E_r3_1', gid: 'E', r: 'Rodada 3', home: 'ger', away: 'civ', time: '2026-06-24T18:00:00', label: '24 JUN • 18:00' },
        { id: 'match_E_r3_2', gid: 'E', r: 'Rodada 3', home: 'ecu', away: 'cuw', time: '2026-06-24T18:00:00', label: '24 JUN • 18:00' },
        { id: 'match_F_r3_1', gid: 'F', r: 'Rodada 3', home: 'ned', away: 'swe', time: '2026-06-24T21:00:00', label: '24 JUN • 21:00' },
        { id: 'match_F_r3_2', gid: 'F', r: 'Rodada 3', home: 'tun', away: 'jpn', time: '2026-06-24T21:00:00', label: '24 JUN • 21:00' },
        
        { id: 'match_G_r3_1', gid: 'G', r: 'Rodada 3', home: 'bel', away: 'irn', time: '2026-06-25T13:00:00', label: '25 JUN • 13:00' },
        { id: 'match_G_r3_2', gid: 'G', r: 'Rodada 3', home: 'nzl', away: 'egy', time: '2026-06-25T13:00:00', label: '25 JUN • 13:00' },
        { id: 'match_H_r3_1', gid: 'H', r: 'Rodada 3', home: 'esp', away: 'ksa', time: '2026-06-25T18:00:00', label: '25 JUN • 18:00' },
        { id: 'match_H_r3_2', gid: 'H', r: 'Rodada 3', home: 'uru', away: 'cpv', time: '2026-06-25T18:00:00', label: '25 JUN • 18:00' },
        { id: 'match_I_r3_1', gid: 'I', r: 'Rodada 3', home: 'fra', away: 'irq', time: '2026-06-25T21:00:00', label: '25 JUN • 21:00' },
        { id: 'match_I_r3_2', gid: 'I', r: 'Rodada 3', home: 'nor', away: 'sen', time: '2026-06-25T21:00:00', label: '25 JUN • 21:00' },
        
        { id: 'match_J_r3_1', gid: 'J', r: 'Rodada 3', home: 'arg', away: 'aut', time: '2026-06-26T13:00:00', label: '26 JUN • 13:00' },
        { id: 'match_J_r3_2', gid: 'J', r: 'Rodada 3', home: 'jor', away: 'alg', time: '2026-06-26T13:00:00', label: '26 JUN • 13:00' },
        { id: 'match_K_r3_1', gid: 'K', r: 'Rodada 3', home: 'por', away: 'col', time: '2026-06-26T18:00:00', label: '26 JUN • 18:00' },
        { id: 'match_K_r3_2', gid: 'K', r: 'Rodada 3', home: 'uzb', away: 'cod', time: '2026-06-26T18:00:00', label: '26 JUN • 18:00' },
        { id: 'match_L_r3_1', gid: 'L', r: 'Rodada 3', home: 'eng', away: 'gha', time: '2026-06-26T21:00:00', label: '26 JUN • 21:00' },
        { id: 'match_L_r3_2', gid: 'L', r: 'Rodada 3', home: 'pan', away: 'cro', time: '2026-06-26T21:00:00', label: '26 JUN • 21:00' }
    ];

    return rawMatches.map(m => ({
        id: m.id,
        grupo_id: m.gid,
        rodada: m.r,
        time_casa_id: m.home,
        time_fora_id: m.away,
        data_hora: m.label,
        kickoff_time: m.time,
        placar_casa: m.resH !== undefined ? m.resH : null,
        placar_fora: m.resA !== undefined ? m.resA : null,
        status: m.status || 'Pendente'
    }));
}

// 4. Estrutura Padrão com os Usuários e Palpites iniciais reais
const defaultData = {
    usuarios: [
        {
            id: 'user_1',
            nome: 'João',
            email: 'joao@email.com',
            foto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1abebq0LEeXm_1kg7Ei1fm-CbXHH_oxm2hL-fRzVKxUgiCKbv8Z5cSeLT9aPeCxkxxH2JU_WlSWGXjaozEJ_dHw7jMn0is9K2ihRUNDaCKBHxwPJU9cOlNbQ33ZB-aWfkg4GKX_WiE416LG-G-EcqQgdzb3pVoqntfUNYnaMKn94K1SuhWoM8zAVx1wdaAVHWpFoXFeVD4-YgOBRFLz-402IMMM6tN5Kp8A3VZRdgJicc00gbnuxwE_tavQwYaICPQ7flAuV9w3E',
            role: 'admin',
            status: 'Ativo',
            pontuacao_base: 0,
            pontuacao_total: 0,
            placares_exatos: 0,
            vitorias_acertadas: 0
        },
        {
            id: 'user_matheus',
            nome: 'Matheus',
            email: 'matheus@email.com',
            foto: '',
            role: 'user',
            status: 'Ativo',
            pontuacao_base: 0,
            pontuacao_total: 5,
            placares_exatos: 1,
            vitorias_acertadas: 0
        },
        {
            id: 'user_fabio',
            nome: 'Fábio Alves',
            email: 'fabio.alves@email.com',
            foto: '',
            role: 'user',
            status: 'Ativo',
            pontuacao_base: 0,
            pontuacao_total: 8,
            placares_exatos: 1,
            vitorias_acertadas: 1
        },
        {
            id: 'user_jader',
            nome: 'Jader',
            email: 'jader@email.com',
            foto: '',
            role: 'user',
            status: 'Ativo',
            pontuacao_base: 0,
            pontuacao_total: 8,
            placares_exatos: 1,
            vitorias_acertadas: 1
        },
        {
            id: 'user_thaynan',
            nome: 'Thaynan',
            email: 'thaynan@email.com',
            foto: '',
            role: 'user',
            status: 'Ativo',
            pontuacao_base: 0,
            pontuacao_total: 6,
            placares_exatos: 0,
            vitorias_acertadas: 2
        },
        {
            id: 'user_henrique',
            nome: 'Henrique',
            email: 'henrique@email.com',
            foto: '',
            role: 'user',
            status: 'Ativo',
            pontuacao_base: 0,
            pontuacao_total: 6,
            placares_exatos: 0,
            vitorias_acertadas: 2
        },
        {
            id: 'user_davi',
            nome: 'Davi',
            email: 'davi@email.com',
            foto: '',
            role: 'user',
            status: 'Ativo',
            pontuacao_base: 0,
            pontuacao_total: 5,
            placares_exatos: 1,
            vitorias_acertadas: 0
        }
    ],
    groups: defaultGroups,
    teams: defaultTeams,
    matches: gerarJogosIniciais(),
    knockout_matches: [],
    palpites: [
        // João (user_1 / Você)
        { usuario_id: 'user_1', jogo_id: 'match_A_r1_1', placar_casa: 2, placar_fora: 2, pontos: 0 },
        { usuario_id: 'user_1', jogo_id: 'match_A_r1_2', placar_casa: 0, placar_fora: 1, pontos: 0 },
        { usuario_id: 'user_1', jogo_id: 'match_B_r1_1', placar_casa: 0, placar_fora: 2, pontos: null },
        { usuario_id: 'user_1', jogo_id: 'match_D_r1_1', placar_casa: 3, placar_fora: 1, pontos: null },
        // Matheus
        { usuario_id: 'user_matheus', jogo_id: 'match_A_r1_1', placar_casa: 2, placar_fora: 2, pontos: 0 },
        { usuario_id: 'user_matheus', jogo_id: 'match_A_r1_2', placar_casa: 2, placar_fora: 1, pontos: 5 },
        { usuario_id: 'user_matheus', jogo_id: 'match_B_r1_1', placar_casa: 1, placar_fora: 1, pontos: null },
        { usuario_id: 'user_matheus', jogo_id: 'match_D_r1_1', placar_casa: 1, placar_fora: 0, pontos: null },
        // Fábio Alves
        { usuario_id: 'user_fabio', jogo_id: 'match_A_r1_1', placar_casa: 2, placar_fora: 0, pontos: 5 },
        { usuario_id: 'user_fabio', jogo_id: 'match_A_r1_2', placar_casa: 1, placar_fora: 0, pontos: 3 },
        { usuario_id: 'user_fabio', jogo_id: 'match_B_r1_1', placar_casa: 2, placar_fora: 1, pontos: null },
        { usuario_id: 'user_fabio', jogo_id: 'match_D_r1_1', placar_casa: 2, placar_fora: 1, pontos: null },
        // Jader
        { usuario_id: 'user_jader', jogo_id: 'match_A_r1_1', placar_casa: 3, placar_fora: 0, pontos: 3 },
        { usuario_id: 'user_jader', jogo_id: 'match_A_r1_2', placar_casa: 2, placar_fora: 1, pontos: 5 },
        { usuario_id: 'user_jader', jogo_id: 'match_B_r1_1', placar_casa: 2, placar_fora: 1, pontos: null },
        { usuario_id: 'user_jader', jogo_id: 'match_D_r1_1', placar_casa: 2, placar_fora: 1, pontos: null },
        // Thaynan
        { usuario_id: 'user_thaynan', jogo_id: 'match_A_r1_1', placar_casa: 2, placar_fora: 1, pontos: 3 },
        { usuario_id: 'user_thaynan', jogo_id: 'match_A_r1_2', placar_casa: 2, placar_fora: 0, pontos: 3 },
        { usuario_id: 'user_thaynan', jogo_id: 'match_B_r1_1', placar_casa: 1, placar_fora: 1, pontos: null },
        { usuario_id: 'user_thaynan', jogo_id: 'match_D_r1_1', placar_casa: 2, placar_fora: 1, pontos: null },
        // Henrique
        { usuario_id: 'user_henrique', jogo_id: 'match_A_r1_1', placar_casa: 2, placar_fora: 1, pontos: 3 },
        { usuario_id: 'user_henrique', jogo_id: 'match_A_r1_2', placar_casa: 1, placar_fora: 0, pontos: 3 },
        { usuario_id: 'user_henrique', jogo_id: 'match_B_r1_1', placar_casa: 1, placar_fora: 0, pontos: null },
        { usuario_id: 'user_henrique', jogo_id: 'match_D_r1_1', placar_casa: 2, placar_fora: 0, pontos: null },
        // Davi
        { usuario_id: 'user_davi', jogo_id: 'match_A_r1_1', placar_casa: 2, placar_fora: 0, pontos: 5 },
        { usuario_id: 'user_davi', jogo_id: 'match_A_r1_2', placar_casa: 0, placar_fora: 1, pontos: 0 },
        { usuario_id: 'user_davi', jogo_id: 'match_B_r1_1', placar_casa: 1, placar_fora: 0, pontos: null },
        { usuario_id: 'user_davi', jogo_id: 'match_D_r1_1', placar_casa: 2, placar_fora: 1, pontos: null }
    ]
};

// 5. Inicialização e Migração do LocalStorage
function getDB() {
    let data = localStorage.getItem(DB_KEY);
    let db;
    if (!data) {
        db = JSON.parse(JSON.stringify(defaultData));
        saveDB(db);
    } else {
        db = JSON.parse(data);
        const user1 = db.usuarios && db.usuarios.find(u => u.id === 'user_1');
        const isGabrielMendes = user1 && user1.nome.includes('Gabriel Mendes');
        
        // Garante que apenas os 7 usuários reais estejam no banco
        const realUserIds = ['user_1', 'user_matheus', 'user_fabio', 'user_jader', 'user_thaynan', 'user_henrique', 'user_davi'];
        const temUsuarioInvalido = !db.usuarios || db.usuarios.length < 7 || db.usuarios.some(u => !u.id.startsWith('user_new_') && !realUserIds.includes(u.id));
        
        // Força migração para a nova tabela do CSV oficial
        const temJogoDoCSV = db.matches && db.matches.some(m => m.id === 'match_B_r1_1');
        
        if (!db.groups || !db.teams || isGabrielMendes || temUsuarioInvalido || !temJogoDoCSV) {
            db = JSON.parse(JSON.stringify(defaultData));
            saveDB(db);
            localStorage.removeItem('bolao_logged_user_id');
        }
    }
    
    // Constrói a listagem virtual 'jogos' para total compatibilidade com o frontend legado
    db.jogos = buildJogosVirtual(db);
    return db;
}

// Salva os dados, sincronizando o virtual 'db.jogos' de volta para 'matches' e 'knockout_matches'
function saveDB(db) {
    if (db.jogos) {
        db.matches = [];
        db.knockout_matches = [];
        
        db.jogos.forEach(j => {
            if (j.id.startsWith('ko_')) {
                db.knockout_matches.push({
                    id: j.id,
                    fase: j.rodada,
                    time_a_id: j.time_casa_id || null,
                    time_b_id: j.time_fora_id || null,
                    placar_a: j.resultado_casa !== undefined && j.resultado_casa !== null ? parseInt(j.resultado_casa) : null,
                    placar_b: j.resultado_fora !== undefined && j.resultado_fora !== null ? parseInt(j.resultado_fora) : null,
                    status: j.encerrado ? 'Finalizado' : 'Pendente',
                    winner_id: j.winner_id || null
                });
            } else {
                db.matches.push({
                    id: j.id,
                    grupo_id: j.grupo_id || (j.grupo ? j.grupo.replace('GRUPO ', '') : 'A'),
                    rodada: j.rodada,
                    time_casa_id: j.time_casa_id || getTeamIdByName(db, j.time_casa),
                    time_fora_id: j.time_fora_id || getTeamIdByName(db, j.time_fora),
                    data_hora: j.data_hora,
                    kickoff_time: j.kickoff_time || 'TBD',
                    placar_casa: j.resultado_casa !== undefined && j.resultado_casa !== null ? parseInt(j.resultado_casa) : null,
                    placar_fora: j.resultado_fora !== undefined && j.resultado_fora !== null ? parseInt(j.resultado_fora) : null,
                    status: j.encerrado ? 'Finalizado' : 'Pendente'
                });
            }
        });
        
        // Remove a propriedade virtual para não salvar lixo
        delete db.jogos;
    }
    
    localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// Busca o ID de um time pelo nome ou cria um genérico para suportar o admin legado
function getTeamIdByName(db, name) {
    if (!name || name === 'A definir') return null;
    const team = db.teams.find(t => t.nome.toLowerCase() === name.toLowerCase());
    if (team) return team.id;
    
    // Fallback/Criação dinâmica no caso do adicionarNovoJogo legado
    const id = 'gen_' + name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 5) + '_' + Date.now();
    db.teams.push({
        id: id,
        grupo_id: 'A',
        nome: name,
        sigla: name.substring(0, 3).toUpperCase(),
        emoji: '🏳️',
        escudo: ''
    });
    return id;
}

// Obter URL da bandeira oficial de uma seleção via FlagCDN
function obterBandeiraUrl(sigla) {
    const mapSiglaToIso = {
        'MEX': 'mx', 'RSA': 'za', 'KOR': 'kr', 'CZE': 'cz',
        'CAN': 'ca', 'BIH': 'ba', 'QAT': 'qa', 'SUI': 'ch',
        'BRA': 'br', 'MAR': 'ma', 'SCO': 'gb-sct', 'HAI': 'ht',
        'USA': 'us', 'PAR': 'py', 'AUS': 'au', 'TUR': 'tr',
        'GER': 'de', 'CUW': 'cw', 'CIV': 'ci', 'ECU': 'ec',
        'NED': 'nl', 'JPN': 'jp', 'TUN': 'tn', 'SWE': 'se',
        'BEL': 'be', 'IRN': 'ir', 'EGY': 'eg', 'NZL': 'nz',
        'ESP': 'es', 'URU': 'uy', 'KSA': 'sa', 'CPV': 'cv',
        'FRA': 'fr', 'SEN': 'sn', 'NOR': 'no', 'IRQ': 'iq',
        'ARG': 'ar', 'AUT': 'at', 'ALG': 'dz', 'JOR': 'jo',
        'POR': 'pt', 'COL': 'co', 'UZB': 'uz', 'COD': 'cd',
        'ENG': 'gb-eng', 'CRO': 'hr', 'PAN': 'pa', 'GHA': 'gh'
    };
    const iso = mapSiglaToIso[sigla.toUpperCase()];
    if (iso) {
        return `https://flagcdn.com/w80/${iso}.png`;
    }
    return '';
}

// Verifica se um jogo está bloqueado para palpites (1 hora antes ou encerrado)
function isJogoBloqueado(jogo) {
    if (!jogo) return true;
    if (jogo.status === 'Finalizado' || jogo.encerrado) return true;
    if (!jogo.kickoff_time || jogo.kickoff_time === 'TBD') return false;
    
    const kickoff = new Date(jogo.kickoff_time);
    if (isNaN(kickoff.getTime())) return false;
    
    const agora = new Date();
    const diferencaMs = kickoff.getTime() - agora.getTime();
    
    // Bloqueia se faltar menos de 1 hora (3600000 ms) ou se o jogo já começou/passou
    return diferencaMs < 3600000;
}

// Helper para montar a lista virtual legada joinando as tabelas
function buildJogosVirtual(db) {
    const jogos = [];
    const teamsMap = {};
    
    db.teams.forEach(t => {
        teamsMap[t.id] = t;
    });
    
    // Jogos da Fase de Grupos
    db.matches.forEach(m => {
        const tCasa = teamsMap[m.time_casa_id];
        const tFora = teamsMap[m.time_fora_id];
        
        jogos.push({
            id: m.id,
            rodada: m.rodada,
            time_casa: tCasa ? tCasa.nome : 'Desconhecido',
            time_fora: tFora ? tFora.nome : 'Desconhecido',
            sigla_casa: tCasa ? tCasa.sigla : '???',
            sigla_fora: tFora ? tFora.sigla : '???',
            escudo_casa: tCasa ? obterBandeiraUrl(tCasa.sigla) : '',
            escudo_fora: tFora ? obterBandeiraUrl(tFora.sigla) : '',
            time_casa_id: m.time_casa_id,
            time_fora_id: m.time_fora_id,
            data_hora: m.data_hora,
            kickoff_time: m.kickoff_time || 'TBD',
            grupo_id: m.grupo_id,
            grupo: `GRUPO ${m.grupo_id}`,
            resultado_casa: m.placar_casa,
            resultado_fora: m.placar_fora,
            encerrado: m.status === 'Finalizado' || isJogoBloqueado(m)
        });
    });
    
    // Jogos de Mata-Mata
    db.knockout_matches.forEach(m => {
        const tCasa = m.time_a_id ? teamsMap[m.time_a_id] : null;
        const tFora = m.time_b_id ? teamsMap[m.time_b_id] : null;
        
        jogos.push({
            id: m.id,
            rodada: m.fase,
            time_casa: tCasa ? tCasa.nome : 'A definir',
            time_fora: tFora ? tFora.nome : 'A definir',
            sigla_casa: tCasa ? tCasa.sigla : 'TBD',
            sigla_fora: tFora ? tFora.sigla : 'TBD',
            escudo_casa: tCasa ? obterBandeiraUrl(tCasa.sigla) : '',
            escudo_fora: tFora ? obterBandeiraUrl(tFora.sigla) : '',
            time_casa_id: m.time_a_id,
            time_fora_id: m.time_b_id,
            data_hora: m.status === 'Finalizado' ? 'Finalizado' : m.fase,
            kickoff_time: m.status === 'Finalizado' ? 'Finalizado' : m.fase,
            grupo: 'MATA-MATA',
            resultado_casa: m.placar_a,
            resultado_fora: m.placar_b,
            encerrado: m.status === 'Finalizado' || (m.time_a_id && m.time_b_id && isJogoBloqueado(m)),
            winner_id: m.winner_id
        });
    });
    
    return jogos;
}

const BUCKET_ID = 'bolao_copa_2026_a08b52be';
const KV_URL = `https://kvdb.io/${BUCKET_ID}`;

// Envia dados do perfil de um usuário para a nuvem
async function pushUsuarioData(userId, userObj) {
    try {
        await fetch(`${KV_URL}/usuario_${userId}`, {
            method: 'POST',
            body: JSON.stringify(userObj)
        });
    } catch (e) {
        console.error('Erro ao enviar dados do usuário para a nuvem:', e);
    }
}

// Envia palpites de um usuário para a nuvem
async function pushPalpites(userId, palpitesArr) {
    try {
        await fetch(`${KV_URL}/palpites_${userId}`, {
            method: 'POST',
            body: JSON.stringify(palpitesArr)
        });
    } catch (e) {
        console.error('Erro ao enviar palpites do usuário para a nuvem:', e);
    }
}

// Envia o estado das partidas (placar oficial) para a nuvem
async function pushMatches(db) {
    try {
        const estadoMatches = {
            matches: db.matches,
            knockout_matches: db.knockout_matches
        };
        await fetch(`${KV_URL}/matches_estado`, {
            method: 'POST',
            body: JSON.stringify(estadoMatches)
        });
    } catch (e) {
        console.error('Erro ao enviar estado dos jogos para a nuvem:', e);
    }
}

// Envia a lista de IDs de usuários ativos para a nuvem
async function pushUsuariosIds(idsArr) {
    try {
        await fetch(`${KV_URL}/usuarios_ids`, {
            method: 'POST',
            body: JSON.stringify(idsArr)
        });
    } catch (e) {
        console.error('Erro ao enviar lista de IDs para a nuvem:', e);
    }
}

// Baixa todos os dados da nuvem e sincroniza
async function syncAllFromCloud() {
    try {
        const db = getDB();
        
        // 1. Baixar estado das partidas oficiais (atualizado pelo admin)
        const resMatches = await fetch(`${KV_URL}/matches_estado`);
        if (resMatches.ok) {
            const txt = await resMatches.text();
            if (txt) {
                const estado = JSON.parse(txt);
                if (estado.matches) db.matches = estado.matches;
                if (estado.knockout_matches) db.knockout_matches = estado.knockout_matches;
            }
        }
        
        // 2. Baixar lista de IDs de usuários ativos na nuvem
        let userIds = ['user_1', 'user_matheus', 'user_fabio', 'user_jader', 'user_thaynan', 'user_henrique', 'user_davi'];
        try {
            const resIds = await fetch(`${KV_URL}/usuarios_ids`);
            if (resIds.ok) {
                const txtIds = await resIds.text();
                if (txtIds) {
                    const idsArr = JSON.parse(txtIds);
                    if (Array.isArray(idsArr) && idsArr.length > 0) {
                        userIds = idsArr;
                    }
                }
            } else {
                // Se não existir na nuvem, inicializa a nuvem com os nossos IDs padrões
                const localIds = db.usuarios.map(u => u.id);
                pushUsuariosIds(localIds);
            }
        } catch (e) {
            console.warn('Erro ao baixar lista de IDs de usuários da nuvem, usando local:', e);
        }
        
        // Limpar palpites locais para preenchermos com os da nuvem
        let novosPalpites = [];
        
        for (const userId of userIds) {
            // Perfis
            const resUsr = await fetch(`${KV_URL}/usuario_${userId}`);
            if (resUsr.ok) {
                const txtUsr = await resUsr.text();
                if (txtUsr) {
                    const usrObj = JSON.parse(txtUsr);
                    let localUsr = db.usuarios.find(u => u.id === userId);
                    if (!localUsr) {
                        // Novo usuário cadastrado na nuvem por outro celular! Criamos localmente
                        localUsr = {
                            id: userId,
                            nome: usrObj.nome || 'Novo Participante',
                            email: usrObj.email || '',
                            senha: usrObj.senha || '',
                            foto: usrObj.foto || '',
                            role: usrObj.role || 'user',
                            status: usrObj.status || 'Ativo',
                            pontuacao_base: usrObj.pontuacao_base || 0,
                            pontuacao_total: usrObj.pontuacao_total || 0,
                            placares_exatos: usrObj.placares_exatos || 0,
                            vitorias_acertadas: usrObj.vitorias_acertadas || 0
                        };
                        db.usuarios.push(localUsr);
                    } else {
                        localUsr.nome = usrObj.nome;
                        localUsr.email = usrObj.email;
                        localUsr.foto = usrObj.foto;
                        localUsr.role = usrObj.role || localUsr.role;
                        localUsr.status = usrObj.status || localUsr.status;
                        localUsr.senha = usrObj.senha || localUsr.senha || '';
                    }
                }
            }
            
            // Palpites
            const resPal = await fetch(`${KV_URL}/palpites_${userId}`);
            if (resPal.ok) {
                const txtPal = await resPal.text();
                if (txtPal) {
                    const palArr = JSON.parse(txtPal);
                    novosPalpites = novosPalpites.concat(palArr);
                } else {
                    const localPalpites = db.palpites.filter(p => p.usuario_id === userId);
                    novosPalpites = novosPalpites.concat(localPalpites);
                }
            } else {
                const localPalpites = db.palpites.filter(p => p.usuario_id === userId);
                novosPalpites = novosPalpites.concat(localPalpites);
            }
        }
        
        db.palpites = novosPalpites;
        
        // Re-virtualiza e salva
        db.jogos = buildJogosVirtual(db);
        saveDB(db);
        
        // Recalcula pontos após sincronizar tudo
        recalcularPontosGeral();
        
        // Despacha um evento personalizado para atualizar a interface se ela estiver ouvindo
        document.dispatchEvent(new CustomEvent('bolaoSyncComplete'));
        console.log('Sincronização em nuvem concluída com sucesso!');
        return true;
    } catch (e) {
        console.error('Erro na sincronização em nuvem:', e);
        return false;
    }
}

// Obter Usuário Logado
function getLoggedUser() {
    const db = getDB();
    const loggedId = localStorage.getItem('bolao_logged_user_id');
    if (!loggedId) return null;
    return db.usuarios.find(u => u.id === loggedId) || null;
}

// Atualiza o Perfil do Usuário Logado
function updateLoggedUserProfile(nome, email, foto) {
    const db = getDB();
    const activeUser = getLoggedUser();
    if (!activeUser) return false;
    
    const user = db.usuarios.find(u => u.id === activeUser.id);
    if (user) {
        user.nome = nome;
        user.email = email;
        if (foto !== undefined) {
            user.foto = foto;
        }
        db.jogos = buildJogosVirtual(db);
        saveDB(db);
        
        // PUSH para a nuvem de forma assíncrona
        pushUsuarioData(user.id, user);
        return true;
    }
    return false;
}

// Salvar/Editar palpite do usuário logado
function savePalpite(jogoId, placarCasa, placarFora) {
    const db = getDB();
    const activeUser = getLoggedUser();
    if (!activeUser) return false;
    const userId = activeUser.id;
    
    // Verifica se o jogo existe e se já está encerrado
    const dbVirtual = getDB();
    const jogo = dbVirtual.jogos.find(j => j.id === jogoId);
    if (jogo && jogo.encerrado) return false;
    
    const palpiteIndex = db.palpites.findIndex(p => p.usuario_id === userId && p.jogo_id === jogoId);
    
    const pCasa = placarCasa === '' ? 0 : parseInt(placarCasa);
    const pFora = placarFora === '' ? 0 : parseInt(placarFora);
    
    if (palpiteIndex !== -1) {
        db.palpites[palpiteIndex].placar_casa = pCasa;
        db.palpites[palpiteIndex].placar_fora = pFora;
    } else {
        db.palpites.push({
            usuario_id: userId,
            jogo_id: jogoId,
            placar_casa: pCasa,
            placar_fora: pFora,
            pontos: null
        });
    }
    
    db.jogos = buildJogosVirtual(db);
    saveDB(db);
    
    // PUSH palpites do usuário para a nuvem de forma assíncrona
    const userPalpites = db.palpites.filter(p => p.usuario_id === userId);
    pushPalpites(userId, userPalpites);
    return true;
}

// Calcular Pontos de um palpite
function calcularPontosPalpite(placarCasaPalpite, placarForaPalpite, placarCasaReal, placarForaReal) {
    if (placarCasaReal === null || placarForaReal === null) return null;
    
    const pCasa = parseInt(placarCasaPalpite);
    const pFora = parseInt(placarForaPalpite);
    const rCasa = parseInt(placarCasaReal);
    const rFora = parseInt(placarForaReal);
    
    // Vitória Exata (Placar Exato)
    if (pCasa === rCasa && pFora === rFora) {
        if (pCasa === pFora) {
            return 4; // Empate Exato: 4 pontos
        }
        return 5; // Vitória Exata: 5 pontos
    }
    
    // Acertou Vencedor
    const vencedorPalpite = pCasa > pFora ? 'C' : (pCasa < pFora ? 'F' : 'E');
    const vencedorReal = rCasa > rFora ? 'C' : (rCasa < rFora ? 'F' : 'E');
    
    if (vencedorPalpite === vencedorReal) {
        if (vencedorReal === 'E') {
            return 1; // Empate não exato: 1 ponto
        }
        return 3; // Vitória sem placar exato: 3 pontos
    }
    
    return 0;
}

// Função Administrativa para salvar o resultado de uma partida e auto-gerar o mata-mata
function salvarResultadoJogo(jogoId, resultadoCasa, resultadoFora) {
    const db = getDB();
    const resCasa = resultadoCasa === '' || resultadoCasa === null ? null : parseInt(resultadoCasa);
    const resFora = resultadoFora === '' || resultadoFora === null ? null : parseInt(resultadoFora);
    
    const match = db.matches.find(m => m.id === jogoId);
    if (match) {
        match.placar_casa = resCasa;
        match.placar_fora = resFora;
        match.status = (resCasa !== null && resFora !== null) ? 'Finalizado' : 'Pendente';
        
        verificarEGerarMataMata(db);
        
        db.jogos = buildJogosVirtual(db);
        saveDB(db);
        pushMatches(db);
        return true;
    }
    
    const koMatch = db.knockout_matches.find(m => m.id === jogoId);
    if (koMatch) {
        koMatch.placar_a = resCasa;
        koMatch.placar_b = resFora;
        koMatch.status = (resCasa !== null && resFora !== null) ? 'Finalizado' : 'Pendente';
        
        if (koMatch.status === 'Finalizado') {
            if (resCasa > resFora) {
                koMatch.winner_id = koMatch.time_a_id;
            } else if (resCasa < resFora) {
                koMatch.winner_id = koMatch.time_b_id;
            } else {
                koMatch.winner_id = koMatch.time_a_id;
            }
        } else {
            koMatch.winner_id = null;
        }
        
        verificarEGerarMataMata(db);
        
        db.jogos = buildJogosVirtual(db);
        saveDB(db);
        pushMatches(db);
        return true;
    }
    
    return false;
}

// Recalcular pontuação de todos os jogadores
function recalcularPontosGeral() {
    const db = getDB();
    
    db.usuarios.forEach(usr => {
        let totalPontos = 0;
        let placaresExatos = 0;
        let vitoriasAcertadas = 0;
        let totalPalpitesEncerrados = 0;
        
        db.palpites.forEach(palpite => {
            if (palpite.usuario_id === usr.id) {
                const jogo = db.jogos.find(j => j.id === palpite.jogo_id);
                if (jogo && jogo.encerrado) {
                    const pts = calcularPontosPalpite(
                        palpite.placar_casa,
                        palpite.placar_fora,
                        jogo.resultado_casa,
                        jogo.resultado_fora
                    );
                    palpite.pontos = pts;
                    totalPontos += pts;
                    totalPalpitesEncerrados++;
                    
                    if (pts === 5 || pts === 4) {
                        placaresExatos++;
                    } else if (pts === 3 || pts === 1) {
                        vitoriasAcertadas++;
                    }
                }
            }
        });
        
        usr.pontuacao_total = usr.pontuacao_base + totalPontos;
        usr.placares_exatos = placaresExatos;
        usr.vitorias_acertadas = vitoriasAcertadas;
    });
    
    // Salva o estado atualizado
    db.jogos = buildJogosVirtual(db);
    saveDB(db);
    
    // Retorna estatísticas de user_1 para fins de retrocompatibilidade
    return obterStatsUsuario('user_1');
}

function obterStatsUsuario(userId) {
    const db = getDB();
    const usr = db.usuarios.find(u => u.id === userId);
    if (!usr) return { pontos: 0, posicao: db.usuarios.length, precisao: '0.0' };
    
    const rankingOrdenado = [...db.usuarios].sort((a, b) => b.pontuacao_total - a.pontuacao_total);
    const posicao = rankingOrdenado.findIndex(u => u.id === userId) + 1;
    
    const palpitesEncerrados = db.palpites.filter(p => p.usuario_id === userId && db.jogos.find(j => j.id === p.jogo_id && j.encerrado));
    const totalPalpitesEncerrados = palpitesEncerrados.length;
    const acertos = usr.placares_exatos + usr.vitorias_acertadas;
    const precisao = totalPalpitesEncerrados > 0 ? ((acertos / totalPalpitesEncerrados) * 100).toFixed(1) : '0.0';
    
    return {
        pontos: usr.pontuacao_total,
        posicao: posicao,
        precisao: precisao
    };
}

window.obterStatsUsuario = obterStatsUsuario;

// ==========================================
// 6. Lógica de Tabela e Chaveamento Automatizado
// ==========================================

function calcularTabelaGrupo(db, grupoId) {
    const grupoMatches = db.matches.filter(m => m.grupo_id === grupoId);
    const groupTeams = db.teams.filter(t => t.grupo_id === grupoId);
    
    const stats = {};
    groupTeams.forEach(t => {
        stats[t.id] = {
            id: t.id,
            nome: t.nome,
            sigla: t.sigla,
            emoji: t.emoji,
            escudo: t.escudo,
            grupo_id: grupoId,
            pj: 0,
            v: 0,
            e: 0,
            d: 0,
            gp: 0,
            gc: 0,
            sg: 0,
            pts: 0
        };
    });
    
    grupoMatches.forEach(m => {
        if (m.status === 'Finalizado' && m.placar_casa !== null && m.placar_fora !== null) {
            const tCasa = stats[m.time_casa_id];
            const tFora = stats[m.time_fora_id];
            
            if (tCasa && tFora) {
                tCasa.pj++;
                tFora.pj++;
                
                tCasa.gp += m.placar_casa;
                tCasa.gc += m.placar_fora;
                tFora.gp += m.placar_fora;
                tFora.gc += m.placar_casa;
                
                if (m.placar_casa > m.placar_fora) {
                    tCasa.v++;
                    tCasa.pts += 3;
                    tFora.d++;
                } else if (m.placar_casa < m.placar_fora) {
                    tFora.v++;
                    tFora.pts += 3;
                    tCasa.d++;
                } else {
                    tCasa.e++;
                    tFora.e++;
                    tCasa.pts += 1;
                    tFora.pts += 1;
                }
            }
        }
    });
    
    Object.values(stats).forEach(t => {
        t.sg = t.gp - t.gc;
    });
    
    const sorted = Object.values(stats).sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.sg !== a.sg) return b.sg - a.sg;
        if (b.gp !== a.gp) return b.gp - a.gp;
        if (b.v !== a.v) return b.v - a.v;
        return a.nome.localeCompare(b.nome);
    });
    
    return sorted;
}

function obterMelhoresTerceiros(db) {
    const terceiros = [];
    const gruposIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    
    gruposIds.forEach(gid => {
        const tabela = calcularTabelaGrupo(db, gid);
        if (tabela.length >= 3) {
            terceiros.push(tabela[2]);
        }
    });
    
    const sorted = terceiros.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.sg !== a.sg) return b.sg - a.sg;
        if (b.gp !== a.gp) return b.gp - a.gp;
        if (b.v !== a.v) return b.v - a.v;
        return a.nome.localeCompare(b.nome);
    });
    
    return sorted.slice(0, 8);
}

function verificarEGerarMataMata(db) {
    const groupMatchesTotal = db.matches.length;
    const groupMatchesFinished = db.matches.filter(m => m.status === 'Finalizado').length;
    
    if (groupMatchesTotal === 0 || groupMatchesFinished < groupMatchesTotal) {
        db.knockout_matches = [];
        return;
    }
    
    const has32Avos = db.knockout_matches.some(m => m.fase === '32 Avos');
    if (!has32Avos) {
        db.knockout_matches = [];
        gerar32Avos(db);
    }
    
    const m32 = db.knockout_matches.filter(m => m.fase === '32 Avos');
    if (m32.length < 16 || !m32.every(m => m.status === 'Finalizado')) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos');
        return;
    }
    
    const hasOitavas = db.knockout_matches.some(m => m.fase === 'Oitavas');
    if (!hasOitavas) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos');
        gerarOitavas(db);
    }
    
    const mOitavas = db.knockout_matches.filter(m => m.fase === 'Oitavas');
    if (mOitavas.length < 8 || !mOitavas.every(m => m.status === 'Finalizado')) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos' || m.fase === 'Oitavas');
        return;
    }
    
    const hasQuartas = db.knockout_matches.some(m => m.fase === 'Quartas');
    if (!hasQuartas) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos' || m.fase === 'Oitavas');
        gerarQuartas(db);
    }
    
    const mQuartas = db.knockout_matches.filter(m => m.fase === 'Quartas');
    if (mQuartas.length < 4 || !mQuartas.every(m => m.status === 'Finalizado')) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos' || m.fase === 'Oitavas' || m.fase === 'Quartas');
        return;
    }
    
    const hasSemis = db.knockout_matches.some(m => m.fase === 'Semifinais');
    if (!hasSemis) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos' || m.fase === 'Oitavas' || m.fase === 'Quartas');
        gerarSemis(db);
    }
    
    const mSemis = db.knockout_matches.filter(m => m.fase === 'Semifinais');
    if (mSemis.length < 2 || !mSemis.every(m => m.status === 'Finalizado')) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos' || m.fase === 'Oitavas' || m.fase === 'Quartas' || m.fase === 'Semifinais');
        return;
    }
    
    const hasFinais = db.knockout_matches.some(m => m.fase === 'Final' || m.fase === '3º Lugar');
    if (!hasFinais) {
        db.knockout_matches = db.knockout_matches.filter(m => m.fase === '32 Avos' || m.fase === 'Oitavas' || m.fase === 'Quartas' || m.fase === 'Semifinais');
        gerarFinais(db);
    }
}

function gerar32Avos(db) {
    const gruposIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const primeiros = [];
    const segundos = [];
    
    gruposIds.forEach(gid => {
        const tabela = calcularTabelaGrupo(db, gid);
        primeiros.push(tabela[0]);
        segundos.push(tabela[1]);
    });
    
    const melhoresTerceiros = obterMelhoresTerceiros(db);
    
    const w = {};
    primeiros.forEach(t => { w[t.grupo_id] = t.id; });
    const r = {};
    segundos.forEach(t => { r[t.grupo_id] = t.id; });
    const t = melhoresTerceiros.map(team => team.id);
    
    const pairings = [
        { id: 'ko_32_1', time_a_id: w['A'], time_b_id: t[7] || null },
        { id: 'ko_32_2', time_a_id: w['B'], time_b_id: t[6] || null },
        { id: 'ko_32_3', time_a_id: w['C'], time_b_id: t[5] || null },
        { id: 'ko_32_4', time_a_id: w['D'], time_b_id: t[4] || null },
        { id: 'ko_32_5', time_a_id: w['E'], time_b_id: t[3] || null },
        { id: 'ko_32_6', time_a_id: w['F'], time_b_id: t[2] || null },
        { id: 'ko_32_7', time_a_id: w['G'], time_b_id: t[1] || null },
        { id: 'ko_32_8', time_a_id: w['H'], time_b_id: t[0] || null },
        
        { id: 'ko_32_9', time_a_id: w['I'], time_b_id: r['L'] },
        { id: 'ko_32_10', time_a_id: w['J'], time_b_id: r['K'] },
        { id: 'ko_32_11', time_a_id: w['K'], time_b_id: r['J'] },
        { id: 'ko_32_12', time_a_id: w['L'], time_b_id: r['I'] },
        
        { id: 'ko_32_13', time_a_id: r['A'], time_b_id: r['B'] },
        { id: 'ko_32_14', time_a_id: r['C'], time_b_id: r['D'] },
        { id: 'ko_32_15', time_a_id: r['E'], time_b_id: r['F'] },
        { id: 'ko_32_16', time_a_id: r['G'], time_b_id: r['H'] }
    ];
    
    pairings.forEach(p => {
        db.knockout_matches.push({
            id: p.id,
            fase: '32 Avos',
            time_a_id: p.time_a_id,
            time_b_id: p.time_b_id,
            placar_a: null,
            placar_b: null,
            status: 'Pendente',
            winner_id: null
        });
    });
}

function gerarOitavas(db) {
    const getWinner = (matchId) => {
        const m = db.knockout_matches.find(x => x.id === matchId);
        return m ? m.winner_id : null;
    };
    
    const pairings = [
        { id: 'ko_16_1', time_a_id: getWinner('ko_32_1'), time_b_id: getWinner('ko_32_9') },
        { id: 'ko_16_2', time_a_id: getWinner('ko_32_2'), time_b_id: getWinner('ko_32_10') },
        { id: 'ko_16_3', time_a_id: getWinner('ko_32_3'), time_b_id: getWinner('ko_32_11') },
        { id: 'ko_16_4', time_a_id: getWinner('ko_32_4'), time_b_id: getWinner('ko_32_12') },
        { id: 'ko_16_5', time_a_id: getWinner('ko_32_5'), time_b_id: getWinner('ko_32_13') },
        { id: 'ko_16_6', time_a_id: getWinner('ko_32_6'), time_b_id: getWinner('ko_32_14') },
        { id: 'ko_16_7', time_a_id: getWinner('ko_32_7'), time_b_id: getWinner('ko_32_15') },
        { id: 'ko_16_8', time_a_id: getWinner('ko_32_8'), time_b_id: getWinner('ko_32_16') }
    ];
    
    pairings.forEach(p => {
        db.knockout_matches.push({
            id: p.id,
            fase: 'Oitavas',
            time_a_id: p.time_a_id,
            time_b_id: p.time_b_id,
            placar_a: null,
            placar_b: null,
            status: 'Pendente',
            winner_id: null
        });
    });
}

function gerarQuartas(db) {
    const getWinner = (matchId) => {
        const m = db.knockout_matches.find(x => x.id === matchId);
        return m ? m.winner_id : null;
    };
    
    const pairings = [
        { id: 'ko_8_1', time_a_id: getWinner('ko_16_1'), time_b_id: getWinner('ko_16_5') },
        { id: 'ko_8_2', time_a_id: getWinner('ko_16_2'), time_b_id: getWinner('ko_16_6') },
        { id: 'ko_8_3', time_a_id: getWinner('ko_16_3'), time_b_id: getWinner('ko_16_7') },
        { id: 'ko_8_4', time_a_id: getWinner('ko_16_4'), time_b_id: getWinner('ko_16_8') }
    ];
    
    pairings.forEach(p => {
        db.knockout_matches.push({
            id: p.id,
            fase: 'Quartas',
            time_a_id: p.time_a_id,
            time_b_id: p.time_b_id,
            placar_a: null,
            placar_b: null,
            status: 'Pendente',
            winner_id: null
        });
    });
}

function gerarSemis(db) {
    const getWinner = (matchId) => {
        const m = db.knockout_matches.find(x => x.id === matchId);
        return m ? m.winner_id : null;
    };
    
    const pairings = [
        { id: 'ko_4_1', time_a_id: getWinner('ko_8_1'), time_b_id: getWinner('ko_8_3') },
        { id: 'ko_4_2', time_a_id: getWinner('ko_8_2'), time_b_id: getWinner('ko_8_4') }
    ];
    
    pairings.forEach(p => {
        db.knockout_matches.push({
            id: p.id,
            fase: 'Semifinais',
            time_a_id: p.time_a_id,
            time_b_id: p.time_b_id,
            placar_a: null,
            placar_b: null,
            status: 'Pendente',
            winner_id: null
        });
    });
}

function gerarFinais(db) {
    const getWinner = (matchId) => {
        const m = db.knockout_matches.find(x => x.id === matchId);
        return m ? m.winner_id : null;
    };
    const getLoser = (matchId) => {
        const m = db.knockout_matches.find(x => x.id === matchId);
        if (!m) return null;
        return m.winner_id === m.time_a_id ? m.time_b_id : m.time_a_id;
    };
    
    db.knockout_matches.push({
        id: 'ko_final_3place',
        fase: '3º Lugar',
        time_a_id: getLoser('ko_4_1'),
        time_b_id: getLoser('ko_4_2'),
        placar_a: null,
        placar_b: null,
        status: 'Pendente',
        winner_id: null
    });
    
    db.knockout_matches.push({
        id: 'ko_final_champ',
        fase: 'Final',
        time_a_id: getWinner('ko_4_1'),
        time_b_id: getWinner('ko_4_2'),
        placar_a: null,
        placar_b: null,
        status: 'Pendente',
        winner_id: null
    });
}

// ==========================================
// 7. Lógica Global de Login/Overlay de Seleção de Usuário
// ==========================================

window.selecionarUsuarioLogin = function(userId) {
    localStorage.setItem('bolao_logged_user_id', userId);
    window.location.reload();
};

window.toggleNovoCadastro = function() {
    const form = document.getElementById('cadastro-form');
    if (form) {
        form.classList.toggle('hidden');
    }
};

window.cadastrarNovoPerfil = async function() {
    const nome = document.getElementById('new-name').value.trim();
    const email = document.getElementById('new-email').value.trim();
    const senha = document.getElementById('new-pass').value.trim();
    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    const db = getDB();
    const newUserId = `user_new_${Date.now()}`;
    const defaultAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1abebq0LEeXm_1kg7Ei1fm-CbXHH_oxm2hL-fRzVKxUgiCKbv8Z5cSeLT9aPeCxkxxH2JU_WlSWGXjaozEJ_dHw7jMn0is9K2ihRUNDaCKBHxwPJU9cOlNbQ33ZB-aWfkg4GKX_WiE416LG-G-EcqQgdzb3pVoqntfUNYnaMKn94K1SuhWoM8zAVx1wdaAVHWpFoXFeVD4-YgOBRFLz-402IMMM6tN5Kp8A3VZRdgJicc00gbnuxwE_tavQwYaICPQ7flAuV9w3E';
    
    const newUsrObj = {
        id: newUserId,
        nome: nome,
        email: email,
        senha: senha,
        foto: defaultAvatar,
        role: 'user',
        status: 'Ativo',
        pontuacao_base: 0,
        pontuacao_total: 0,
        placares_exatos: 0,
        vitorias_acertadas: 0
    };
    
    db.usuarios.push(newUsrObj);
    db.jogos = buildJogosVirtual(db);
    saveDB(db);
    
    // Define usuário logado
    localStorage.setItem('bolao_logged_user_id', newUserId);
    
    // Subir na nuvem
    await pushUsuarioData(newUserId, newUsrObj);
    await pushPalpites(newUserId, []);
    
    const userIds = db.usuarios.map(u => u.id);
    await pushUsuariosIds(userIds);
    
    window.location.reload();
};

window.selecionarUsuarioLoginPassCheck = function(userId) {
    const db = getDB();
    const usr = db.usuarios.find(u => u.id === userId);
    if (!usr) return;
    
    const container = document.getElementById('senha-form-container');
    if (!container) return;
    
    // Ocultar formulário de cadastro se estiver aberto
    const cadForm = document.getElementById('cadastro-form');
    if (cadForm) cadForm.classList.add('hidden');
    
    const temSenha = usr.senha && usr.senha.trim() !== '';
    
    container.innerHTML = `
        <div class="mt-2 space-y-2 border-t border-slate-100 pt-3">
            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">${temSenha ? 'Digite sua senha de acesso' : 'Cadastre sua senha de acesso'}</h4>
            <div class="flex gap-2">
                <input class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none" id="login-pass-input" type="password" placeholder="${temSenha ? 'Senha de acesso' : 'Nova senha'}"/>
                <button onclick="confirmarSenhaAcesso('${userId}', ${!temSenha})" class="bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold text-xs hover:brightness-110 active:scale-95 transition-all">
                    Confirmar
                </button>
            </div>
            <div id="login-pass-error" class="text-[10px] text-red-500 hidden font-bold"></div>
        </div>
    `;
    container.classList.remove('hidden');
    
    // Auto-focus no input de senha
    setTimeout(() => {
        document.getElementById('login-pass-input')?.focus();
    }, 50);
};

window.confirmarSenhaAcesso = async function(userId, cadastrando) {
    const db = getDB();
    const usr = db.usuarios.find(u => u.id === userId);
    if (!usr) return;
    
    const passInput = document.getElementById('login-pass-input');
    const errorDiv = document.getElementById('login-pass-error');
    const senhaVal = passInput.value.trim();
    
    if (senhaVal === '') {
        errorDiv.innerText = 'Preencha a senha!';
        errorDiv.classList.remove('hidden');
        return;
    }
    
    if (cadastrando) {
        // Cadastra nova senha
        usr.senha = senhaVal;
        db.jogos = buildJogosVirtual(db);
        saveDB(db);
        
        // Salva na nuvem
        await pushUsuarioData(userId, usr);
        
        // Define login
        localStorage.setItem('bolao_logged_user_id', userId);
        window.location.reload();
    } else {
        // Valida senha
        if (usr.senha === senhaVal) {
            localStorage.setItem('bolao_logged_user_id', userId);
            window.location.reload();
        } else {
            errorDiv.innerText = 'Senha incorreta!';
            errorDiv.classList.remove('hidden');
            passInput.value = '';
            passInput.focus();
        }
    }
};

function verificarLoginOverlay() {
    const loggedId = localStorage.getItem('bolao_logged_user_id');
    const db = getDB();
    const loggedUser = db.usuarios.find(u => u.id === loggedId);
    
    if (!loggedId || !loggedUser) {
        const oldOverlay = document.getElementById('login-overlay');
        if (oldOverlay) oldOverlay.remove();
        
        const overlay = document.createElement('div');
        overlay.id = 'login-overlay';
        overlay.className = 'fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto';
        
        const usersListHtml = db.usuarios.map(usr => {
            const avatarUrl = usr.foto || 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1abebq0LEeXm_1kg7Ei1fm-CbXHH_oxm2hL-fRzVKxUgiCKbv8Z5cSeLT9aPeCxkxxH2JU_WlSWGXjaozEJ_dHw7jMn0is9K2ihRUNDaCKBHxwPJU9cOlNbQ33ZB-aWfkg4GKX_WiE416LG-G-EcqQgdzb3pVoqntfUNYnaMKn94K1SuhWoM8zAVx1wdaAVHWpFoXFeVD4-YgOBRFLz-402IMMM6tN5Kp8A3VZRdgJicc00gbnuxwE_tavQwYaICPQ7flAuV9w3E';
            return `
            <button onclick="selecionarUsuarioLoginPassCheck('${usr.id}')" class="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-slate-100 transition-all text-left bg-slate-50 border border-slate-200 active:scale-[0.98]">
                <div class="w-10 h-10 rounded-full overflow-hidden border border-slate-300">
                    <img class="w-full h-full object-cover" src="${avatarUrl}" alt="${usr.nome}">
                </div>
                <div class="flex-1">
                    <span class="font-bold text-slate-800 block text-sm">${usr.nome}</span>
                    <span class="text-[10px] text-slate-500 block uppercase font-bold">${usr.role}</span>
                </div>
                <span class="material-symbols-outlined text-emerald-700 text-lg">login</span>
            </button>`;
        }).join('');
        
        overlay.innerHTML = `
        <div class="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl flex flex-col gap-4 border border-slate-200 text-slate-800">
            <div class="text-center pb-2">
                <span class="text-3xl">🏆</span>
                <h2 class="font-extrabold text-2xl text-emerald-800 mt-2">Bolão Copa 2026</h2>
                <p class="text-xs text-slate-500 mt-1">Escolha seu perfil ou crie um novo para acessar</p>
            </div>
            
            <div class="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Participantes Ativos</h3>
                <div class="flex flex-col gap-1.5">
                    ${usersListHtml}
                </div>
            </div>

            <div id="senha-form-container" class="hidden"></div>
            
            <div class="border-t border-slate-100 pt-2">
                <button onclick="toggleNovoCadastro()" class="w-full text-center text-emerald-700 font-bold text-xs hover:underline py-2">
                    Novo por aqui? Cadastrar perfil
                </button>
                
                <div id="cadastro-form" class="hidden mt-2 space-y-3">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1" for="new-name">Nome Completo</label>
                        <input class="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700" id="new-name" type="text" placeholder="Seu Nome"/>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1" for="new-email">E-mail</label>
                        <input class="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700" id="new-email" type="email" placeholder="seu.email@exemplo.com"/>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1" for="new-pass">Definir Senha de Acesso</label>
                        <input class="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700" id="new-pass" type="password" placeholder="Digite uma senha"/>
                    </div>
                    <button onclick="cadastrarNovoPerfil()" class="w-full bg-emerald-700 text-white py-2 rounded-xl font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1">
                        <span class="material-symbols-outlined text-sm">person_add</span>
                        Criar e Entrar
                    </button>
                </div>
            </div>
        </div>`;
        
        document.body.appendChild(overlay);
    }
}

// Inicia a verificação de login assim que o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', verificarLoginOverlay);
} else {
    // Dá um tempo curto para o body estar montado em chamadas síncronas
    setTimeout(verificarLoginOverlay, 10);
}
