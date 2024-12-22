for (let i = 0; i < positions; ++i) {
    const offsetValue = offset[i] !== undefined ? offset[i] : null;
    const anchorValue = anchor[i] !== undefined ? anchor[i] : null;

    console.log(`Position ${i}: Offset = ${offsetValue}, Anchor = ${anchorValue}`);
}
