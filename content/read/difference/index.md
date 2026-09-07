---
created: 2026-07-06
---

# On Physical Difference as the Universal Source of Work

*Alex Lugovskoy*

*Israel*

![[difference-grabstract.webp]]
## Abstract
The concepts of exergy, thermodynamic potentials, generalized forces, and irreversible fluxes are usually introduced in different theoretical contexts. Nevertheless, they share a common physical structure. This essay proposes a unifying interpretation: useful work does not originate from energy as such, but from the existence of a physical difference in one or more generalized variables. The production of work is the process by which such differences are reduced under given constraints. In this view, exergy is naturally interpreted as a quantitative measure of the exploitable difference between a system and its environment. Helmholtz and Gibbs free energies appear as special cases of this measure under particular external constraints. The same conceptual structure also underlies the driving forces of non-equilibrium thermodynamics, where gradients of temperature, chemical potential, electric potential, pressure, or other generalized quantities give rise to irreversible fluxes.

## 1. Introduction
Classical thermodynamics defines work as one of the possible modes of energy transfer. Exergy theory refines this idea by asking how much useful work can be obtained from a system when it is brought into compatibility with its environment. Non-equilibrium thermodynamics, in turn, describes irreversible processes in terms of generalized forces and the corresponding fluxes.

These formulations are mathematically precise, but they often conceal a simple and general physical fact. In every known case where useful work is produced, there exists an initial difference: a difference in temperature, pressure, height, electric potential, chemical potential, concentration, velocity, population, phase, or some other generalized physical variable.

This suggests the following general principle:

> Useful work is possible only in the presence of an initial physical difference. The production of work is the process of reducing that difference.

The term *difference* is deliberately broader than the term *equilibrium*. Equilibrium is a technical concept with a precise meaning within thermodynamics and mechanics. Difference, by contrast, denotes any physically meaningful distinction between states, regions, subsystems, degrees of freedom, or a system and its surroundings that can be coupled to a work-producing process.

## 2. Energy Is Not Enough
Energy is necessary for work, but it is not sufficient.

A body may contain a large amount of internal energy and still be unable to perform useful work. A large reservoir of water at uniform temperature contains immense thermal energy. Yet no heat engine can extract work from it unless another reservoir at a different temperature is available. The obstacle is not the absence of energy, but the absence of an exploitable difference.

Thus the usual statement that work requires energy is incomplete. A more physically informative statement is:

> Work requires not merely energy, but a difference in the distribution or state of energy-bearing variables.

In this sense, work is not produced by energy alone. It is produced by the relaxation of difference.

## 3. Examples of Work-Producing Differences
The same structure appears across many branches of physics and engineering.

| Process | Initial difference | Work-producing reduction |
|---|---|---|
| Heat engine | Temperature difference | Heat flows from hot to cold while part of the transfer is converted to work |
| Hydraulic turbine | Height or pressure difference | Water descends or pressure decreases |
| Electric circuit | Electric potential difference | Charge moves through a load |
| Chemical cell | Chemical potential difference | Reactants move toward products of lower free energy |
| Diffusion | Concentration or chemical potential difference | Concentrations tend to equalize |
| Osmosis | Solvent chemical potential difference | Solvent redistribution reduces the difference |
| Wind turbine | Velocity and pressure differences in air flow | Momentum and pressure fields are altered |
| Flywheel | Difference between rotational state and load | Angular momentum and energy are transferred |
| Laser | Population inversion | Excited population relaxes through stimulated emission |
| Nuclear reaction | Difference in nuclear binding configurations | Nuclei transform toward more strongly bound states |

The physical variables differ from case to case, but the abstract pattern remains the same. There is an initial difference, a coupling mechanism, and a process in which part of the reduction of difference appears as work.

## 4. Difference as a Generalization of Gradient
In many physical theories the driving force of a process is expressed as a gradient — a spatial derivative of an intensive variable. Heat conduction is driven by a temperature gradient; diffusion by a chemical potential gradient; electric current by an electric potential gradient.
A gradient, however, is a special case of a more general object: a lumped, finite difference between two identifiable states, taken in the limit where the spatial separation between them shrinks to zero. When the two reservoirs of a heat engine are treated as uniform bulk phases rather than as points in a continuum, the driving quantity is naturally expressed as ΔT rather than ∇T. The battery, the flywheel, and the chemical reaction are all cases where the relevant physics is more economically described in lumped-parameter form than in distributed-parameter form.
The distinction between “gradient” and “difference” is therefore not a distinction in physical content but in the level of spatial discretization at which the driving quantity is represented. The principle proposed here is deliberately stated at the lumped level, since this is the level at which it applies uniformly across mechanical, electrical, chemical, and thermal work-producing processes; the continuum (gradient) description is recovered whenever the difference is resolved over a spatial field, and the two are formally connected through the standard limiting procedure Δφ/Δx → dφ/dx.

## 5. Exergy as the Measure of Exploitable Difference
Exergy is traditionally defined as the maximum useful work obtainable as a system is brought into equilibrium with its surroundings. The standard definition is correct, but conceptually it may be rephrased as follows:

> Exergy is the quantitative measure of the exploitable physical difference between a system and its environment.

This interpretation emphasizes that exergy is not simply “stored energy.” A system may contain a large internal energy while possessing little or no exergy. Conversely, a system with a relatively small amount of energy may possess significant exergy if its state differs strongly from that of the environment in an exploitable way.

The environment is essential in the definition. A system does not possess exergy in isolation in the same sense in which it possesses internal energy. Exergy is relational. It measures how far the system is, in usable physical terms, from the environment with which it may interact.

When all exploitable differences between the system and the environment disappear, exergy becomes zero. Energy may remain, but the possibility of obtaining useful work has vanished.

## 6. Helmholtz and Gibbs Free Energies as Constrained Forms of Difference

Thermodynamic potentials can be understood as constrained forms of the same principle.

For a closed system at constant temperature and volume, the maximum useful work is given by the decrease in the Helmholtz free energy:

$$
W_{\max} = -\Delta A,
$$

where

$$
A = U - TS.
$$

For a system at constant temperature and pressure, the corresponding quantity is the Gibbs free energy:

$$
W_{\max} = -\Delta G,
$$

where

$$
G = H - TS.
$$

In both cases the thermodynamic potential measures the work obtainable from the reduction of a particular kind of difference under specified constraints. Helmholtz free energy applies when temperature and volume are fixed. Gibbs free energy applies when temperature and pressure are fixed. Exergy generalizes this logic by explicitly including the environment and by accounting for all relevant differences between the system and that environment.

Thus Helmholtz free energy, Gibbs free energy, and exergy are not unrelated ideas. They are different mathematical expressions of the same physical structure: the possibility of obtaining work from the reduction of difference under constraints.

## 7. Connection with Non-Equilibrium Thermodynamics
The proposed principle becomes especially natural when viewed through non-equilibrium thermodynamics.

In the linear theory of irreversible processes, fluxes are driven by thermodynamic forces. These forces are often gradients of intensive variables. Heat flux is associated with a temperature gradient. Matter flux is associated with a chemical potential gradient. Electric current is associated with an electric potential gradient. Viscous flow is associated with velocity gradients. Chemical reactions are associated with affinities, which measure the difference in chemical potentials between reactants and products.

Schematically, such relations often take the form

$$
J_i = \sum_j L_{ij} X_j,
$$

where \($J_i$) are fluxes, $(X_j)$ are generalized thermodynamic forces, and $(L_{ij})$ are phenomenological coefficients.

The generalized forces  $(X_j)$ are precisely formal expressions of physical differences. A flux appears because a difference exists. The irreversible process reduces, redistributes, or transforms that difference. If the system is properly coupled to a machine, part of this reduction may be obtained as useful work.

This provides a bridge between the intuitive principle of difference and the formal machinery of non-equilibrium thermodynamics.

## 8. Generalized Variables and Conjugate Pairs

A more formal version of the principle may be stated using generalized variables and their conjugate forces.

Mechanical work may be written as force times displacement. Expansion work may be written as pressure times volume change. Electrical work involves electric potential and charge. Chemical work involves chemical potential and particle number. Surface work involves surface tension and area change. Magnetic work involves magnetic field variables and magnetization.

In each case, work has the structure

$$
\delta W = Y\,dX,
$$

where *(X)* is a generalized displacement or extensive variable and *(Y)* is the corresponding generalized force or intensive variable.

Work becomes possible when there is a difference in the relevant generalized force, generalized potential, or generalized state. The process of work extraction couples this difference to a controlled change in the conjugate variable.

This formulation avoids reducing the principle to any single physical domain. It applies equally well to mechanical, thermal, chemical, electrical, magnetic, surface, and other forms of work.

## 9. The General Principle

The preceding discussion may be summarized as follows:

Principle of Physical Difference:
A necessary condition for obtaining useful work is the existence of an initial difference in one or more generalized physical variables.
The production of useful work consists in coupling this difference to a process in which the difference is reduced.

The maximum obtainable work is bounded by the magnitude and type of the initial difference, by the environment, and by the constraints imposed on the process — and this bound is itself an expression of the second law: no process can convert a given difference into work with an efficiency exceeding the reversible (Carnot-type) limit set by that difference and its environment.

This principle does not deny the importance of energy, nor does it stand apart from the second law of thermodynamics — it is, in effect, a restatement of the Clausius/Kelvin impossibility of a perpetual motion machine of the second kind, phrased in terms of generalized differences rather than heat and cold reservoirs alone. Energy provides the conserved quantity that can be redistributed. Difference determines whether this redistribution can be used to produce work, and the second law determines how much of that difference can actually be converted.

## 10. Scope and Limitations
The principle of physical difference is not proposed as new physics. It is a conceptual unification of results already established separately in exergy analysis (Szargut, Bejan), in the linear theory of irreversible processes (Onsager, de Donder), and in equilibrium thermodynamic potentials (Gibbs, Helmholtz). Its contribution is pedagogical and organizational: it names, as a single object, what these frameworks treat as temperature differences, chemical affinities, electric potential differences, and departures from equilibrium.
Several limitations should be noted.

First, not every physical difference is exploitable. A coupling mechanism must exist; a difference that cannot be coupled to a work-producing process does not constitute available work in practice.

Second, the reduction of difference is constrained by the second law, as stated above. Not all of the difference associated with a process can be converted into useful work; part is necessarily dissipated as entropy production.

Third, the word difference is broader and less mathematically rigid than gradient, affinity, potential, or thermodynamic force. As discussed in Section 4, it is best understood as the lumped-parameter form of these more formally defined quantities, and formal applications still require specifying the relevant variables and constraints explicitly.

Fourth, the environment must be included explicitly whenever exergy is discussed. Available work is not an intrinsic property of a system alone; it is a relational property of the system together with its surroundings.

Fifth, the principle extends naturally beyond classical thermodynamics into the domain of information. The Szilard engine and Landauer’s principle show that a difference in an agent’s information about a system’s microstate can itself be coupled to the extraction of work, with the cost of erasing that information setting the thermodynamic bound. This suggests that “difference” in the sense used here is not restricted to energy-bearing variables but extends to informational ones as well — a point that strengthens, rather than undermines, the generality claimed for the principle, and that a reader should not mistake for an extension of the second law itself, which remains unchanged.
## 11. Consequences of the Formulation
The proposed formulation has several useful consequences.

First, it explains why internal energy and available work are not the same. Energy may be present without exploitable difference.

Second, it gives an intuitive interpretation of exergy as a measure of usable difference.

Third, it shows why thermodynamic potentials are not arbitrary mathematical constructions. They are bookkeeping devices for specific kinds of constrained differences.

Fourth, it naturally connects equilibrium thermodynamics with non-equilibrium thermodynamics. Equilibrium thermodynamics describes the limiting states in which relevant differences have disappeared. Non-equilibrium thermodynamics describes the fluxes generated by the presence of such differences.

Fifth, it suggests a broader educational formulation: students may understand work, free energy, exergy, gradients, and irreversible processes more easily if they are first taught that useful work requires difference.

## 12. Conclusion
The statement that work requires energy is true but incomplete. A more general and more physically revealing statement is:

> Useful work does not originate from energy itself, but from physical differences in the distribution, state, or generalized variables of energy-bearing systems.

Energy is the conserved substrate. Difference is the source of availability. Work is the controlled reduction of difference.

From this viewpoint, exergy is the measure of exploitable difference between a system and its environment. Helmholtz and Gibbs free energies are constrained forms of the same idea. The generalized forces of non-equilibrium thermodynamics are formal expressions of such differences. Across mechanical, thermal, chemical, electrical, nuclear, and transport processes, the underlying structure is the same: where there is no physical difference, there is no useful work to be obtained.

## References 
	•	Onsager, L. (1931). Reciprocal Relations in Irreversible Processes I & II. Physical Review.
	•	De Donder, T., & Van Rysselberghe, P. (1936). Thermodynamic Theory of Affinity. Stanford University Press.
	•	Szargut, J., Morris, D. R., & Steward, F. R. (1988). Exergy Analysis of Thermal, Chemical, and Metallurgical Processes. Hemisphere.
	•	Bejan, A. (2016). Advanced Engineering Thermodynamics (4th ed.). Wiley.
	•	Callen, H. B. (1985). Thermodynamics and an Introduction to Thermostatistics (2nd ed.). Wiley.
	•	Szilard, L. (1929). Über die Entropieverminderung in einem thermodynamischen System bei Eingriffen intelligenter Wesen. Zeitschrift für Physik.
	•	Landauer, R. (1961). Irreversibility and Heat Generation in the Computing Process. IBM Journal of Research and Development.
