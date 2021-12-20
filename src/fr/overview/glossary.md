# :bookmark_tabs: Glossaire
Il se peut que vous tombiez sur des concepts peu familiers dans la documentation de Rocket Pool. Cette section répertorie les termes courants de la documentation pour faciliter l'accès, l'apprentissage et le développement de plugins/thèmes.

## APY - Rendement annuel en % (APY):
Le montant du bénéfice (rendement) calculé sur une période d'un an divisé par le montant de l'investissement initial, exprimé en pourcentage.

## Bonding
*Voir Assurance*

## Contrat intelligent (Smart Contract)
Un programme ethereum (contrat intelligent) qui est utilisé pour exécuter un ensemble de fonctions programmées. Les contrats intelligents de Rocket Pool comprennent le pool de dépôt, la formation du validateur de minipool, et émettent et suivent diverses interactions de tokens sur la chaîne ethereum.

## Client
Un client est une implémentation du logiciel Ethereum qui vérifie toutes les transactions dans chaque bloc, en gardant le réseau sécurisé et les données exactes. *Voir aussi client eth1 et client eth2.*

## Custodial
Service centralisé qui gère l'ensemble du processus de staking de l'ETH pour le compte de l'utilisateur et conserve la "garde" des clés privées de validation dans les clés de retrait. *Voir aussi non-custodial.*

## DAO (Organisation Autonome Décentralisée)
Une organisation représentée par des règles encodées sous forme de programme informatique qui est transparente, contrôlée par les membres de l'organisation et non influencée par un gouvernement central.

## Pool de dépôt
Le montant d'ETH prêt à être staké. Le pool de dépôt est alimenté par les utilisateurs réguliers lorsqu'ils échangent des ETH contre des rETH. Cet ETH est le montant qui attend d'être appairé avec des opérateurs de noeuds dans la file d'attente des opérateurs de noeud.

## ETH
La cryptomonnaie fondamentale générée et utilisée par le protocole Ethereum.

## eth1.0
Le protocole original Ethereum 1.0 qui utilise un mécanisme de consensus connu sous le nom de Proof-of-Work et utilise des mineurs pour valider la blockchain.

## Client eth1
Les logiciels clients Ethereum qui fonctionnent sur le réseau eth1.0.

## Client eth2
Les logiciels clients Ethereum qui fonctionnent sur le réseau eth2.0.

## eth2.0
Le réseau Ethereum 2.0 et la mise à jour du réseau Ethernet qui a été lancé en décembre 2020 et remplacera l'ancien mécanisme de consensus de preuve de travail d'eth1.0.

## Assurance
La quantité de tokens RPL, exprimée en pourcentage de la valeur des ETH stakés par l'opérateur de nœud, qu'un opérateur de nœud doit déposer lorsqu'il démarre un validateur de minipool. L'assurance RPL staké par un opérateur de nœud servira d'assurance pour rembourser les utilisations régulières dans le cas où l'opérateur de nœud quitte la mise en place avec moins de 16 ETH dans ses validateurs.

## Minipool (Validateur)
Un validateur qui a été approvisionné et initialisé via le logiciel Rocket Pool.  Il est le plus souvent composé d'une quantité égale d'ETH apportée par les utilisateurs réguliers via le pool de dépôt et d'ETH apportée par les opérateurs de nœuds lors de leur processus d'inscription.

## Noeud (Node)
Dans le réseau ethereum, les nœuds sont des appareils (ordinateurs) qui exécutent un logiciel client ethereum.

## Commission des noeuds
Le montant d'ETH supplémentaire attribué à un opérateur de nœud. Il s'agit en fait de la "commission" qui est prélevée sur les stakers normaux; dans Rocket Pool, cette commission est donnée aux opérateurs de nœuds. Cette valeur est déterminée par le nombre d'opérateurs de nœuds et la quantité d'ETH disponible dans le pool de dépôt. Elle peut varier de 5 à 20 %, l'objectif idéal étant de 10 %. La commission de chaque minipool sera verrouillée à vie lors de la création du minipool.

## Commission des noeuds, slippage
Le montant du slippage négatif dans la commission de nœud qu'un opérateur de nœud est prêt à accepter lors de la création d'un validateur de minipool.  Le glissement est la différence entre le taux de commission affiché et le taux de commission que vous êtes prêt à accepter lorsque la transaction est terminée. Le montant du glissement négatif toléré est choisi par l'opérateur de nœud lorsqu'il forme initialement un validateur de minipool.

## Opérateur de noeud
Une personne qui souhaite sécuriser le réseau Ethereum en exploitant un nœud (ordinateur) qui exécutera le logiciel Rocket Pool, un client validateur eth2 et éventuellement un client beacon eth1 et eth2. Les opérateurs de nœuds gagneront des récompenses de rendement en ETH à un taux plus élevé que les opérateurs solos sur le réseau Ethereum 2.0.

## Node Software
Un ensemble de programmes qui permettent aux opérateurs de nœuds d'interagir avec le protocole Rocket Pool.

## Node Wallet
Un portefeuille eth1 qui est généré par Rocket Pool lors de la création d'un nouveau nœud. Ce portefeuille sera utilisé pour financer les nouveaux minipools lors de leur création et payer les frais de gas nécessaires pour interagir avec les contrats intelligents de Rocket Pool.

## Non-Custodial
Un service qui fournit un accès simplifié pour la configuration des validateurs mais qui ne détient pas les clés privées des validateurs et les clés de retrait des utilisateurs. Rocket Pool est un service de staking non-custodial.

## Oracle DAO (oDAO)
Une DAO composée de tous les opérateurs de nœuds d'oracle. *Voir aussi DAO.*

## Oracle Node
Un nœud spécial géré par des membres de confiance de la communauté Rocket Pool qui relaie les informations de la Beacon Chain ETH2 (telles que les récompenses totales de staking et le statut de sortie du validateur) vers la chaîne ETH1 afin que les contrats intelligents Rocket Pool puissent fonctionner correctement.

## Proof-of-Stake (PoS)
Le mécanisme de consensus utilisé dans eth2.0, où les utilisateurs votent sur l'exactitude des nouveaux blocs en mettant en jeu (staking) l'ETH dans leur portefeuille.

## Proof-of-Woork (PoW)
La preuve de travail (PoW) est le mécanisme qui permet au réseau décentralisé Ethereum de parvenir à un consensus, ou de se mettre d'accord sur des éléments tels que le solde des comptes et l'ordre des transactions.  La preuve de travail est l'algorithme sous-jacent qui définit la difficulté et les règles du travail des mineurs.

## Protocol DAO (pDAO)
La DAO composée de tous les détenteurs de tokens RPL. *Voir aussi DAO.*

## Regular Node (Opérateur)
Le terme donné aux opérateurs de nœuds "normaux" qui n'ont pas les responsabilités supplémentaires des Oracle Nodes.

## Staker régulier
Un utilisateur qui veut gagner des intérêts sur ses ETH sans les découpler de la valeur sous-jacente de l'ETH. Un staker régulier interagit avec la plateforme de Rocket Pool en échangeant des ETH contre des tokens RETH. Ses ETH sont introduits dans le pool de staking, où ils sont acquis par les opérateurs de nœuds lorsqu'ils créent de nouveaux minipools.

## Pool de réassurance
Un pool de dépôt où les détenteurs de tokens RPL peuvent déposer leurs RPL qui seront utilisés par le réseau Rocket Pool pour percevoir un rendement. La provision collective de RPL déposée dans ce pool agira comme une deuxième couche d'assurance pour rembourser les stakers réguliers dont le dépôt d'ETH initial peut avoir été perdu en raison d'un minipool sortant avec moins que la somme de 16ETH plus toute assurance RPL détenue par l'opérateur du nœud. (Note : non opérationnel lors du lancement initial)

## rETH (Rocket Pool Staking Deposit Token)
Un token qui représente le dépôt d'un staker régulier dans le pool de staking. Les stakers réguliers reçoivent une valeur équivalente de token rETH pour chaque pièce ETH qu'ils déposent. Au fur et à mesure que les intérêts sont gagnés par le staking sur le réseau ethereum, la valeur du token rETH augmente par rapport à l'ETH. Ce token n'a pas besoin d'être bloqué dans le réseau et il peut être échangé, vendu ou détenu comme le souhaite l'utilisateur.

## RPL (Rocket Pool Token)
Il s'agit d'un token émis par le contrat Rocket Pool. Il sert à deux fins : premièrement, comme assurance supplémentaire contre le slashing que les opérateurs de nœuds doivent fournir avant de créer de nouveaux minipools ; deuxièmement, comme token de gouvernance utilisé pour voter dans la DAO du protocole.

## Stake
Une quantité de monnaie ou de token qui est déposée comme garantie collatérale pour effectuer un travail.  Une personne peut staker de l'ETH soit en tant qu'utilisateur régulier en échangeant de l'ETH contre du rETH, soit en tant qu'opérateur de nœud en déposant de l'ETH pour l'utiliser dans le cadre du processus de consensus du PoS eth 2.0. Une personne qui stake son ETH (par exemple un staker) est récompensée par un APY ou un rendement sur son ETH déposé.

## Pool de Staking
Un pool de staking permet à plusieurs détenteurs d'ETH de combiner leurs jetons pour former collectivement la somme nécessaire au fonctionnement d'un client eth2. Rook Pool crée, surveille, assigne et assure ces pools collectifs en utilisant une méthode décentralisée non-custodial.  

## Validateur
*Voir minipool.*
