import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
    const [mapInteractionsEnabled, setMapInteractionsEnabled] = useState(false);
    const mapRef = React.useRef(null);
    const [hovering, setHovering] = useState(false); // Track hover state
    useEffect(() => {
        if (!mapRef.current) {
            console.log('Initializing map...');
            const map = L.map('map', { attributionControl: false }).setView([40.1804333, 44.4461906], 13);
    
            if (map) {
                console.log('Map initialized successfully.');
            } else {
                console.log('Map initialization failed.');
            }
    
            const redMarker = L.divIcon({
                className: 'custom-red-marker',
                html: '<div style="width: 10px; height: 10px; background-color: #621817; border-radius: 30%;"></div>',
                iconSize: [10, 10],
                iconAnchor: [5, 8]
            });
    
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    
            L.marker([40.1804333, 44.4461906], { icon: redMarker })
                .addTo(map)
                .bindTooltip('<b>Ղարս Թոնրատուն</b>', {
                    permanent: true,
                    direction: 'top',
                    className: 'custom-tooltip'
                })
                .openTooltip();
    
            // Add circle
            L.circle([40.1816664, 44.4361517], {
                color: '#621817',
                fillColor: '#742726',
                fillOpacity: 0.3,
                radius: 1550
            }).addTo(map);
    
            mapRef.current = map;
        }
    
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null; // Clean up reference
            }
        };
    }, []);
    
    // Enable or disable map interactions
    const toggleMapInteractions = () => {
        setMapInteractionsEnabled((prev) => !prev);
    };

    // Enable or disable map interactions based on state
    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;
            if (mapInteractionsEnabled) {
                map.dragging.enable();
                map.scrollWheelZoom.enable();
                map.touchZoom.enable();
                map.doubleClickZoom.enable();
            } else {
                map.dragging.disable();
                map.scrollWheelZoom.disable();
                map.touchZoom.disable();
                map.doubleClickZoom.disable();
            }
        }
    }, [mapInteractionsEnabled]);

    return (
        <div style={{ position: 'relative' }}>
            {/* Overlay for hover effect */}
            <div
                id="map-overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay effect
                    opacity: mapInteractionsEnabled ? 0 : hovering ? 1 : 0, // Disable hover effect when interactions are enabled
                    transition: 'opacity 0.3s ease', // Smooth transition
                    pointerEvents: 'none', // Allow clicking through the overlay
                    zIndex: 999, // Overlay above map
                }}
            ></div>

            {/* Button to toggle map interactions */}
            <button
                className="interact-button"
                onClick={toggleMapInteractions}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)', // Center button horizontally
                    backgroundColor: '#742726',
                    color: 'white',
                    padding: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: '1000',
                    opacity: hovering ? 1 : 0, // Show button when hovering over the map
                    transition: 'opacity 0.3s ease', // Smooth transition for visibility
                }}
                id="interactButton"
                onMouseEnter={() => setHovering(true)} // Keep hovering true when hovering over the button
                onMouseLeave={() => setHovering(false)} // Stop hovering when leaving the button
            >
                {mapInteractionsEnabled ? 'Չփոխազդել' : 'Փոխազդել '}
            </button>

            {/* Map Container */}
            <div
                id="map"
                style={{
                    height: '430px',
                    width: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                }}
                onMouseEnter={() => setHovering(true)} // Show overlay and button on hover
                onMouseLeave={() => setHovering(false)} // Hide overlay and button when hover ends
            ></div>
        </div>
    );
};

export default MapComponent;
