---
created: 2026-08-08
title: "Thermodynamics Without Caloric: From Microstates to the Laws"
date: 08/08/2026
author: Alex Lugovskoy
---
*Alex lugovskoy*

Thermodynamics is usually taught beginning with temperature, pressure, volume, internal energy, and quantity of heat. This is convenient in practice, but it somewhat obscures the logical structure of the theory. All these quantities appear almost simultaneously, and only afterward are the relationships among them established.

Let us try to proceed in the opposite direction: first define a physical system and its states, then examine energy and the ways in which it is transferred, and only afterward introduce the statistical measure of a macrostate and use it to derive temperature, equilibrium, and the laws of thermodynamics.

We shall begin primarily with an **isolated system of fixed energy**, using the language of the microcanonical ensemble. This is the most natural starting point for a statistical construction of thermodynamics. Systems in contact with a heat reservoir, and the corresponding canonical ensemble, will appear later as derived constructions.

## **The Physical System and Its Boundary**

First of all, we must specify what exactly we call the system.

The system may be a gas in a cylinder, a piece of metal, a battery, a chemical reactor, a gas together with its piston, or an entire experimental apparatus. Everything not included in the system is called its surroundings.

A boundary is drawn between the system and its surroundings. This boundary may be material, like the wall of a vessel, or imaginary, like a surface that we conceptually draw around the part of an apparatus that interests us.

The choice of system does not alter the physical events taking place, but it changes the way in which they are described.

If a gas raises a weight and only the gas is regarded as the system, energy leaves the system as work. If the gas, piston, cable, and weight are all included in the system, raising the weight is no longer a transfer of energy across the external boundary. It is a redistribution of energy among the parts of a larger system.

The same applies to heat transfer. If one of two bodies in contact is regarded as the system, energy entering it from the other body crosses the boundary as heat. If both bodies are included in a single composite system, no heat crosses its external boundary: energy is redistributed within the system.

Therefore, before speaking about heat, work, or internal energy, we must define the boundary of the system.

## **Degrees of Freedom**

Let us begin with a simple mechanical object: a material point. To specify its position in three-dimensional space, we need three coordinates:

$$  
x,\quad y,\quad z.  
$$

To specify its complete classical mechanical state, position alone is not enough. We must also know the three components of momentum:

$$  
p_x,\quad p_y,\quad p_z.  
$$

The state of a single classical particle can therefore be represented by a point in a six-dimensional phase space:

$$  
(x,y,z,p_x,p_y,p_z).  
$$

For $N$ particles, the phase space becomes $6N$-dimensional. If the particles can rotate, vibrate, change electronic states, or participate in chemical reactions, additional parameters are required.

A **degree of freedom** is an independent parameter required to describe a possible state of the system.

In quantum mechanics, a state can no longer be understood as a simultaneous set of exact values of all mechanical quantities. The general idea nevertheless remains: the theory must specify the most complete state from which the probabilities of all permissible measurement results can be calculated.

## **Microstate**

A **microstate** is the most complete state of a system permitted by the physical theory being used.

For a classical gas, this would mean knowing the positions and momenta of all molecules:

$$  
\Gamma=  
(\mathbf r_1,\mathbf p_1,  
\mathbf r_2,\mathbf p_2,\ldots,  
\mathbf r_N,\mathbf p_N).  
$$

Two gases that differ even in the coordinate or momentum of a single molecule occupy different classical microstates.

In quantum theory, a pure microstate is specified by a state vector. A more general statistical state is described by a density matrix.

A macroscopic body contains on the order of $10^{23}$ particles, so a complete microscopic description is practically unattainable. More importantly, it is unnecessary for most purposes. We are usually interested not in the coordinates of individual molecules, but in much coarser properties of the system.

## **Macrostate**

Let us select a finite set of observable quantities:

$$  
q^1,q^2,\ldots,q^n.  
$$

These may include volume, energy, amount of matter, chemical composition, charge, deformation, magnetization, and many other quantities, depending on the system and the problem under consideration.

The values of these quantities, specified with some finite precision, define a **macrostate**.

A single macrostate corresponds to an enormous number of microstates that cannot be distinguished by the chosen macroscopic quantities:

$$  
\Gamma_1,\Gamma_2,\Gamma_3,\ldots  
$$

A macrostate may therefore be understood as a class of microstates compatible with a given set of macroscopic conditions and with the precision with which those conditions are specified.

Let us denote the statistical measure of this set by $\Omega$.

For a discrete system, $\Omega$ may be an ordinary number of microstates. For a classical continuous system, it is a suitably normalized measure of phase-space volume. Energy is normally specified not by one absolutely exact value, but by a narrow energy shell:

$$  
E\le H(\Gamma)<E+\Delta E.  
$$

Thus, there is a mapping

$$  
\text{microstates}  
\longrightarrow  
\text{macrostates},  
$$

under which many microstates are represented by a single macroscopic point.

## **A Macrostate Is a Model, but Not a Fiction**

A macroscopic description is a model: we choose a limited set of quantities with which to describe the system. This does not mean, however, that the macroscopic variables or the changes they describe are subjective.

If a gas raises a weight of mass $m$ through a height $h$, the potential energy of the weight–Earth system objectively changes by

$$  
\Delta E=mgh.  
$$

This result does not disappear merely because the coordinate of the weight is absent from the description of the state of the gas itself.

A macrostate is objective relative to a specified set of measurable quantities and the precision of their measurement, but it is not a complete description of the system.

If two systems have identical values of all chosen macroscopic variables but subsequently behave differently, then the chosen set of variables was incomplete.

For example, knowing only the angular displacement of a pendulum is insufficient to specify its mechanical state: at the same position, the pendulum may be moving either to the right or to the left. Its momentum must also be included.

Similarly, glasses, plastically deformed metals, and chemically nonequilibrated systems may require additional internal structural variables.

The space of macrostates is therefore not given to us in advance. It is constructed so as to distinguish those states that matter for the problem under consideration.

## **Energy of a Microstate**

Each classical microstate $\Gamma$ has an energy

$$  
E=H(\Gamma),  
$$

where $H$ is the Hamiltonian of the system.

In classical mechanics, this includes the kinetic energy of the particles and the energy of their interactions. In quantum mechanics, energy is determined by the Hamiltonian operator and the state of the system.

It is important to note from the outset that energy contained within a system is not divided into “heat” and “work.”

A portion of energy carries no label indicating how it entered the system. Once transferred to the system, it is simply energy of the system.

## **Internal Energy**

At the macroscopic level, instead of the energy of a particular microstate we introduce the **internal energy** $U$.

In the microcanonical description of an isolated system, $U$ is effectively identified with the fixed energy of a narrow energy shell:

$$  
U\simeq E.  
$$

In the canonical description of a system in contact with a heat reservoir, the energy fluctuates, and the internal energy is defined as its average value:

$$  
U=\langle H\rangle.  
$$

The exact meaning of $U$ therefore depends on the statistical ensemble being used. In what follows, we shall regard the microcanonical description as primary and the canonical description as arising when a subsystem is coupled to a large reservoir.

Internal energy is a thermodynamic state function defined after the system has been chosen and after a convention has been adopted concerning which parts of the total energy are to be treated separately.

For example, the kinetic energy of a moving gas cylinder as a whole is usually not included in its internal energy. The energy of motion and interaction of the molecules inside it is included.

In the presence of external fields, strong coupling to the surroundings, or a complicated system boundary, the division of total energy into internal and external parts may depend on the adopted convention. Once the system and the conventions have been specified, however, $U$ is a function of the state of the system.

## **Work and Heat as Modes of Energy Transfer**

Work and heat are not forms of energy contained inside a system. They characterize **ways in which energy is transferred across its boundary**.

Consider a gas pushing a piston. The gas exerts a force on the piston, and the point of application of the force is displaced. The transferred energy is mechanical work:

$$  
\delta W=Fdx.  
$$

For a simple gas undergoing a quasistatic process:

$$  
\delta W=PdV.  
$$

If the piston raises a weight, the increase in its potential energy, $mgh$, is an objective result of the work done by the gas.

Other channels of work include the rotation of a shaft, the passage of charge through a potential difference, the stretching of a surface, elastic deformation, and changes in magnetic state.

For a quasistatic process, elementary work can often be written as

$$  
\delta W=\sum_i X_idq^i,  
$$

where $X_i$ are generalized forces and $dq^i$ are the corresponding generalized displacements or fluxes.

In a general nonequilibrium process, a field description may be required, and a finite-dimensional set of coordinates may no longer be sufficient.

## **Work Can Become Internal Energy**

Suppose a rotating shaft stirs a viscous liquid. The shaft performs work:

$$  
W=\int \tau d\varphi,  
$$

where $\tau$ is the torque and $\varphi$ is the angle of rotation.

After the stirring stops, the organized motion of the liquid decays, and the transferred energy increases its internal energy.

In the final equilibrium state, the angle of rotation of the shaft is not among the state variables of the liquid. Nevertheless, the work performed was real and measurable.

Work therefore cannot be defined as the final change of a coordinate of the equilibrium state of the system. Work is energy transferred across the system boundary through a macroscopically controlled interaction.

## **Heat**

Heat is another mode of energy transfer.

It does not correspond to a quantity $Q$ stored in a body. One cannot specify the “heat content” of a system in the same way that one can specify its internal energy.

In the simplest case, heat is transferred when two bodies are in thermal contact and occupy different thermodynamic states.

At the microscopic level, energy is transferred through many interactions among the degrees of freedom on the two sides of the boundary. Unlike work, this transfer is not described by a single controlled macroscopic displacement such as the motion of a piston or the rotation of a shaft.

It is therefore useful, as a preliminary distinction, to speak of:

**work as controlled energy transfer**

and

**heat as energy transfer through thermal interaction.**

This distinction should not be understood as a contrast between “organized” and “chaotic” energy already contained inside the system. The same type of microscopic excitation may participate either in a coherent work process or in a thermal state.

Work and heat are determined by the character of the interaction at the boundary, not by the origin of individual portions of energy after they have entered the system.

Moving the system boundary can turn external heat transfer or work into an internal redistribution of energy. It does not eliminate the underlying physical process.

## **The First Law**

The first law is an energy balance:

The change in the internal energy of a system equals the energy transferred across its boundary.

Using the convention that $W$ is work done by the system,

$$  
\boxed{dU=\delta Q-\delta W}  
$$

If work is done on the system, a different sign convention may be adopted. The physical content is unchanged.

$U$ is a state function, so $dU$ is an exact differential. By contrast, $\delta Q$ and $\delta W$ are generally not exact differentials. Their integrals depend on the path of the process.

The first law therefore states:

**There exists a state function $U$ whose change equals the total energy transferred across the system boundary, with the signs determined by the chosen convention.**

For a closed cycle:

$$  
\oint dU=0,  
$$

and therefore

$$  
\oint\delta Q=\oint\delta W.  
$$

A system may absorb heat and perform work, but after completing a full cycle its internal energy returns to its initial value.

## **Entropy as a Statistical Measure**

Let us now consider the set of microstates compatible with a given macrostate.

In the simplest case of equally probable microstates, Boltzmann entropy is

$$  
\boxed{S=k_B\ln\Omega}  
$$

The logarithm is essential. If two weakly interacting subsystems possess respectively $\Omega_A$ and $\Omega_B$ compatible microstates, the composite system has

$$  
\Omega_{A+B}=\Omega_A\Omega_B.  
$$

Their entropies therefore add:

$$S_{A+B}=k_B\ln(\Omega_A\Omega_B)=S_A+S_B.  
$$

For a general probability distribution, the broader Gibbs formula is used:

$$  
S=-k_B\sum_i p_i\ln p_i,  
$$

and in quantum theory, the von Neumann entropy is

$$  
S=-k_B\operatorname{Tr}(\rho\ln\rho).  
$$

Thus, $S=k_B\ln\Omega$ should be understood as an important special case of a more general statistical construction.

## **Temperature as a Condition for Energy Redistribution**

Consider an isolated composite system consisting of two subsystems:

$$  
A+B.  
$$

Suppose they can exchange energy while the total energy remains constant:

$$  
U_A+U_B=U_{\mathrm{tot}}.  
$$

If the subsystems are weakly coupled and their microstates can be combined independently, the statistical measure of the composite system is

$$\Omega_{\mathrm{tot}}=\Omega_A(U_A)\Omega_B(U_B).  
$$

For a small transfer of energy:

$$  
dU_B=-dU_A.  
$$

A stationary distribution of energy is determined by an extremum of

$$\ln\Omega_{\mathrm{tot}}=\ln\Omega_A+\ln\Omega_B.  
$$

Differentiating with respect to $U_A$, we obtain

$$
\left(\frac{\partial\ln\Omega_A}{\partial U_A}\right) 
= 
\left(  
\frac{\partial\ln\Omega_B}{\partial U_B}  
\right).  
$$

Let us define

$$  
\boxed{  
\beta=  
\left(  
\frac{\partial\ln\Omega}{\partial U}  
\right)_{q_i}  
}  
$$

At equilibrium:

$$  
\beta_A=\beta_B.  
$$

Introducing the usual absolute temperature,

$$  
\beta=\frac1{k_BT},  
$$

we obtain

$$  
T_A=T_B.  
$$

Equality of the first derivatives, however, defines only a stationary point. For it to correspond to a stable maximum of the statistical measure, an additional condition of thermodynamic stability is required:

$$  
\frac{\partial^2 S}{\partial U^2}<0.  
$$

This means that entropy is a concave function of energy. For ordinary systems, this is associated with positive heat capacity.

There are systems for which this simple picture requires further qualifications: systems with long-range interactions, systems with negative heat capacity in the microcanonical description, and systems with negative absolute temperatures when the energy spectrum is bounded above.

Equality of temperatures is therefore a condition of stationarity, while the stability of equilibrium requires an analysis of second derivatives.

## **What Remains of the Zeroth Law**

In phenomenological thermodynamics, the zeroth law is formulated as the transitivity of thermal equilibrium:

$$  
A\sim B,\qquad B\sim C  
\quad\Longrightarrow\quad  
A\sim C.  
$$

This allows a common empirical temperature scale to be introduced before any microscopic explanation of heat is available.

In purely phenomenological or axiomatic thermodynamics, the zeroth law is therefore an independent postulate: the theory does not yet know anything about microstates, $\Omega$, or statistical mechanics.

In the statistical reconstruction, a separate postulate becomes unnecessary. If thermal equilibrium is characterized by equality of $\beta$, transitivity follows from ordinary numerical equality:

$$  
\beta_A=\beta_B,\qquad  
\beta_B=\beta_C  
\quad\Longrightarrow\quad  
\beta_A=\beta_C.  
$$

By moving the system boundary, external heat transfer can be transformed into an internal redistribution of energy. The equilibrium of the composite system can then be derived from an extremum of the statistical measure of compatible microstates.

The zeroth law therefore retains a fundamental role in phenomenological thermodynamics, but in statistical mechanics it may be regarded as a consequence of a more general construction.

## Temperature as the Energetic Price of Statistical Accessibility

From the definition
$$
\frac{1}{k_B T}
=
\left(
\frac{\partial \ln\Omega}{\partial U}
\right)_{q_i}
$$

provided the dependence is locally monotonic and can be inverted, we obtain

$$   
\boxed{  
k_B T=  
\left(  
\frac{\partial U}{\partial\ln\Omega}  
\right)_{q_i}  
}  
$$

This gives temperature a meaningful interpretation:

**$k_BT$ is the local energetic price of changing the logarithmic statistical measure of states compatible with the specified macroscopic conditions.**

The inverse temperature $\beta$ shows how rapidly the logarithmic measure of compatible states changes with energy.

This interpretation is much broader than the familiar school-level formula relating temperature to the average kinetic energy of molecules. That relation holds only for certain classical systems and regimes.

The condition of local monotonicity is essential. If the function $S(U)$ ceases to be monotonic, the temperature may pass through infinity and change sign. This is how negative absolute temperatures arise in certain systems whose spectra are bounded above.

## **Heat and Entropy**

For a reversible quasistatic process:

$$  
\delta Q_{\mathrm{rev}}=TdS.  
$$

In the simplest Boltzmann case:

$$  
dS=k_Bd\ln\Omega,  
$$

and therefore

$$
\boxed{\delta Q_{\mathrm{rev}}=k_B T d\ln\Omega  
}  
$$

This formula does not mean that heat is stored in the number of states. Heat remains a mode of energy transfer across a boundary.

The formula means that, for a reversible process, thermal energy transfer is associated with a change in the statistical measure of the macrostate.

For an irreversible process, the entropy transferred across the boundary must be distinguished from entropy produced internally:

$$
dS=
\frac{\delta Q}{T_{\mathrm{boundary}}}  
+  
dS_{\mathrm{gen}},  
$$

where

$$  
dS_{\mathrm{gen}}\ge0.  
$$

Here $T_{\mathrm{boundary}}$ is the temperature at the location where heat transfer occurs. In a strongly nonequilibrium system, a single temperature for the system as a whole may not exist.

Entropy can increase even when

$$  
\delta Q=0.  
$$

Examples include free expansion of a gas, viscous dissipation, diffusion, and mixing.

A change in entropy must therefore not be identified solely with heat supplied to the system.

## **The Second Law**

Consider an isolated system as a whole. No energy crosses its external boundary:

$$  
\delta Q_{\mathrm{ext}}=0,  
\qquad  
\delta W_{\mathrm{ext}}=0.  
$$

Within the system, however, energy may be redistributed among subsystems, and work may be converted into internal energy.

If a low-entropy macrostate corresponds to a comparatively small region of phase space, while an equilibrium state corresponds to a much larger one, then for typical initial microstates the macroscopic evolution proceeds toward statistically larger macrostates.

Schematically:

$$  
\Omega_{\mathrm{small}}  
\longrightarrow  
\Omega_{\mathrm{large}}.  
$$

Since

$$  
S=k_B\ln\Omega,  
$$

this is expressed macroscopically as

$$  
\boxed{\Delta S\ge0}  
$$

for an isolated system.

This is not, however, an absolute prohibition of the same kind as conservation of energy.

Microscopic equations are often time-reversal invariant. In finite systems, fluctuations involving temporary decreases in entropy are possible. Poincaré recurrence is not forbidden either.

The second law should therefore be understood as a statistical statement about typical macroscopic behavior, given a low-entropy past, a chosen macroscopic description, and a corresponding measure on the set of microstates.

The distinction between past and future does not follow merely from the fact that high-entropy states are more numerous. A special initial condition is also required: the past of the system must have had comparatively low entropy.

In other words, statistical mechanics explains why a system already in a low-entropy state will almost certainly evolve toward higher entropy. By itself, however, it does not explain why the low-entropy state was located in the past.

## **Dissipation and the Availability of Energy for Work**

When a controlled energetic process, such as the rotation of a shaft, is distributed among many internal degrees of freedom, energy does not disappear.

It remains part of the internal energy of the system and its surroundings. What is lost is the possibility of fully restoring the original controlled process without causing additional changes elsewhere.

A viscous liquid can stop a rotating shaft and become warmer. But the spontaneous coordinated motion of its molecules that would set the shaft rotating again is macroscopically extraordinarily improbable.

Dissipation therefore destroys not energy, but its availability for complete conversion into controlled work.

Strictly speaking, this availability is measured not by internal energy itself, but by the relevant free energy or exergy defined relative to a specified environment.

## **Equilibrium as an Extremum Under Permitted Exchanges**

The reasoning used for temperature can be generalized.

If two subsystems can exchange energy, stationary equilibrium requires

$$  
T_A=T_B.  
$$

If they can exchange particles, equality of chemical potentials is required:

$$  
\mu_A=\mu_B.  
$$

If a movable boundary permits redistribution of volume, mechanical equilibrium is associated with equality of pressures:

$$  
P_A=P_B.  
$$

Equality of the corresponding intensive quantities nevertheless establishes only stationarity. For stable equilibrium, the statistical measure or relevant thermodynamic potential must possess a maximum or minimum of the appropriate kind. This is determined by second derivatives and stability conditions.

More fundamental than the individual “equalization laws” is therefore the following general principle:

**When a constraint is removed, conserved quantities are redistributed among subsystems until the composite system reaches a stable extremum of the appropriate statistical or thermodynamic function.**

Which intensive quantities become equal depends on which channels of exchange are permitted.

Temperature has no unique privilege in this picture. It is the intensive quantity conjugate to energy exchange.

## **What Happens at Absolute Zero**

Temperature is not a measure of motion in general.

As $T\to0$, a quantum system approaches its ground state or a mixture of degenerate ground states.

The ground state need not have zero energy, nor does it imply that all constituents are motionless.

For example, a harmonic oscillator has the ground-state energy

$$  
E_0=\frac12\hbar\omega.  
$$

This is the zero-point energy.

Absolute zero therefore means the absence of thermal excitation above the ground state, not the cessation of all motion or the disappearance of all energy.

Real systems may involve further complications: degeneracy, continuous spectra, metastability, and the impossibility of reaching true equilibrium in finite time.

## **The Third Law**

The third law concerns the limiting behavior of entropy as absolute zero is approached.

For an ideal perfect crystal with a unique ground state:

$$  
S\to0  
\qquad  
(T\to0).  
$$

In the simplest statistical language, this corresponds to

$$  
\Omega\to1.  
$$

If the ground state has degeneracy $g$, a residual entropy may remain:

$$  
S(0)=k_B\ln g.  
$$

Real systems, however, may exhibit metastability, glass formation, frustration, and other complications. A general formulation of the third law must therefore be treated with care.

One thermodynamic formulation states that as $T\to0$, entropy approaches a constant independent of the other thermodynamic parameters.

There is also a dynamical formulation: absolute zero cannot be reached through a finite number of physical operations.

In any case, the third law concerns not the “cessation of motion,” but the structure of the lower energy boundary and the behavior of the state space near it.

## **What Have We Obtained?**

By beginning not with temperature and quantity of heat, but with the definition of the system, its boundary, and its states, we obtain the following picture.

- A microstate specifies the most complete state of a system permitted by the corresponding physical theory.
- A macrostate is a reduced but objectively measurable description that groups together many microstates compatible with specified macroscopic conditions.
- Internal energy belongs to the state of the system. In the microcanonical description it effectively coincides with fixed energy; in the canonical description it is the average value of a fluctuating energy.
- Work and heat are modes of energy transfer across the system boundary.
- By moving the boundary, an external transfer of energy can be converted into an internal redistribution among subsystems.
- The first law expresses energy balance:

$$  
dU=\delta Q-\delta W.  
$$

- Entropy characterizes the statistical measure of microstates compatible with a macrostate.
- Temperature arises as the intensive quantity that equalizes when energy exchange is permitted:

$$
\frac{1}{k_B T} 
= 
\left(  
\frac{\partial\ln\Omega}{\partial U}  
\right)_{q_i}  
$$

- Equality of temperatures establishes stationarity of the energy distribution, while stability of equilibrium requires additional conditions involving second derivatives.
- The zeroth law remains an independent postulate of phenomenological thermodynamics, but in statistical mechanics it can be derived from the equilibrium condition of a composite system.
- The second law describes the statistical direction of macroscopic evolution and the loss of availability of energy for complete conversion into work.
- The third law characterizes the lower energy boundary and the behavior of the statistical structure of states as $T\to0$.

In this formulation, thermodynamics begins to look not like a collection of separate rules about heat, but like a unified theory of:

- system boundaries;
- fluxes of conserved quantities;
- statistical measures of states;
- conditions of stable equilibrium;
- typical trajectories of nonequilibrium evolution.

We can now ask the next question.

If equilibrium is determined by a stable extremum of the statistical measure of states, while a nonequilibrium process is a trajectory through the space of macrostates, can every possible trajectory be assigned a numerical measure of its probability, dissipation, or statistical cost?

In other words: is there an analogue of action for thermodynamics—one that selects not the geometrically shortest or mechanically stationary path, but the statistically most typical macroscopic trajectory?