# ⚠️ Technical Disclaimer — BMSSP Performance Simulator (Not an Implementation)

## Overview

RouteRush Island includes a mode labelled **"BMSSP-Inspired Simulation."**
This feature exists **only as an educational performance/behavior simulator** and **does not implement** the BMSSP algorithm.

BMSSP (Bounded Multi-Source Shortest Paths), as introduced in the research literature (Duan et al., 2025), is a real algorithm with formal structural components and asymptotic complexity guarantees.
**This project does not attempt to reproduce those mechanisms.**

---

## What the BMSSP Mode Actually Does

The BMSSP mode in RouteRush Island:

* Uses **Bidirectional Dijkstra** for finding the real shortest path
* Collects timing/performance values from this execution
* **Simulates BMSSP-like timing curves** for educational comparison
* Provides visualization of **frontier shrinking**, **pivots**, and **bounded-search behavior** in a simplified, conceptual way

It is essentially a **didactic performance simulator**, not an algorithmic implementation.

---

## What the BMSSP Research Algorithm Actually Includes (Not Implemented Here)

The real BMSSP algorithm involves:

* **Recursive frontier reduction and partitioning**
* **Pivot selection with bounded Dijkstra expansion**
* **Batch multi-source shortest-path query handling**
* A provable **O(m log^(2/3) n)** time complexity
* Specialized data structures and engineering not present here

None of these components are implemented in RouteRush Island.

---

## What This BMSSP Mode *Is*

* A **teaching and intuition-building tool**
* A **conceptual simulator** that visualizes high-level ideas
* Designed for **single-source, single-destination** interaction
* Suitable for **students**, **educators**, and **algorithm enthusiasts**
* A way to explore how concepts like frontier shrinking and bounded searching *might* look in practice

---

## What This BMSSP Mode *Is NOT*

This mode does **NOT**:

* Implement the real BMSSP algorithm
* Reproduce BMSSP's recursive structure or multi-source batching
* Achieve BMSSP's theoretical complexity bounds
* Serve as a **reference**, **benchmark**, or **research implementation**
* Perform genuine BMSSP optimizations or engineering techniques

It should not be used for academic evaluation or comparison.

---

## Why This Disclaimer Exists

This disclaimer protects:

* **You (the project author)** — from overclaiming or accidental misrepresentation
* **The BMSSP authors** — whose research must not be diluted or incorrectly attributed
* **Students and developers** — so they do not mistake the simulator for the real algorithm
* **Future readers** — who deserve technical accuracy and honest expectations

Maintaining this clarity is essential, especially when referencing an algorithm with real theoretical guarantees.

---

## Summary (Important)

> **RouteRush Island does not implement BMSSP. It implements Bidirectional Dijkstra for actual routing and displays a simplified, conceptual, performance-inspired simulation for educational purposes only.**

---

## Further Reading

For the real BMSSP algorithm, its structure, guarantees, and batch-query design, please refer to the original academic papers by Duan et al. (2025).

For classical shortest-path algorithms actually implemented in this project:

* Dijkstra
* Bidirectional Dijkstra
* Bellman–Ford

---

[← Back to README](../README.md) | [View Algorithm Details](algorithms.md)
