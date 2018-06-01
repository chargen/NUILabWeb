import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class PublicationService{

    constructor(private _http:Http)
    {}

    getPublications = (): Observable<Response> => {
        console.log("In getConfiguration of ConfigurationService");
        return this._http.get('../assets/json/publications.json ').map(res => res.json());
    }

    getPublication()
    {
        return (
            {
                "RefereedJournals":
                [
                  {
                    "name" : "<b>Ortega, F.<\/b>, Tarre, K., Rishe, N., and Barreto, A., \"3D Navigation for 6DOF Using Multi-Touch vs. GamePad\", under submission in International Journal of HumanComputer Studies, 2017.",
                    "links": 
                    []
                  },
                  {
                    "name" : "Cofino J., Barreto A., Abyarjoo F., and <b>Ortega, F.<\/b>, \"Sonically-Enhanced Tabular Screen-Reading\", Journal on Technology & Persons with Disabilities (JTPD),Vol. 2, pp. 46–57, 2014.",
                    "links": 
                    [
                      {"from":"SOAR", "url":"http://scholarworks.csun.edu/handle/10211.3/133374"},
                      {"from":"PDF", "url":"assets/papers/sonically-enhanced_tabular_screen-reading.pdf"}
                    ]
                  },
                  {
                    "name" : "Ren P., Barreto A., Huang J., Gao Y., <b>Ortega, F.<\/b>, and Adjouadi, M., \"Off-line and On-line Stress Detection through Processing of the Pupil Diameter Signal.\" In Annals of Biomedical Engineering, vol. 42, no. 1, pp. 162–176, 2014.",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/article/10.1007/s10439-013-0880-9"},
                      {"from":"PDF", "url":"/assets/papers/off-line_and_on-line_stress_detection_through_processing_of_the_pupil_diameter_signal.pdf"}
                    ]
                  }
                ],
                "RefereedConferences":
                [
                  {
                    "name" : "Balcazar, R., <b>Ortega, F.<\/b>, Tarre, K., Barreto, A., Weiss, M., Rishe, N., \"CircGR : Real-Time Multi-Touch Circular Gesture Recognition\", to appear in Proceedings of the 2017 ACM on Interactive Surfaces and Spaces (ISS ’17). Brighton, England.",
                    "links": 
                    []
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Galvan, A., Tarre, K., Barreto, A., Rishe, N., Bernal, J., Balcazar, R., and Thomas, J., \"Gesture Elicitation for 3D Travel via Multi-Touch and Mid-Air Systems for Procedurally Generated Pseudo-Universe.\" In 2017 IEEE Symposium on 3D User Interfaces (3DUI), Los Angeles, CA, 2017, pp 144–153.",
                    "links": 
                    [
                      {"from":"IEEE Xplore", "url":"https://link.springer.com/article/10.1007/s10439-013-0880-9"},
                      {"from":"PDF", "url":"assets/papers/off-line_and_on-line_stress_detection_through_processing_of_the_pupil_diameter_signal.pdf"}
                    ]
                  },
                  {
                    "name" : "Tangnimitchok, S., O-Larnnithipong, N., Barreto, A.,<b>Ortega, F.<\/b> R., and Rishe, N. D., \"Finding an Efficient Threshold for Fixation Detection in Eye Gaze Tracking.\" In International Conference on Human-Computer Interaction, Interaction Platforms and Techniques of the series Lecture Notes in Computer Science- Volume 9732, pp. 93-103, Springer-Verlag New York, Inc., Jul. 2016. ",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/chapter/10.1007/978-3-319-39516-6_9"},
                      {"from":"PDF", "url":"assets/papers/finding_an_efficient_threshold_for_fixation_detection_in_eye_gaze_tracking.pdf"}
                    ]
                  },
                  {
                    "name" : "Abyarjoo, F., O-Larnnithipong, N., Tangnimitchok, S., Adjouadi, M., <b>Ortega, F.<\/b>, and Barreto, A., \"PostureMonitor: Real-Time IMU Wearable Technology to Foster Poise and Health.\" In International Conference of Design, User Experience, and Usability of the series Lecture Notes in Computer Science, vol. 9188, Springer International Publishing, pp 543–552, Aug. 2015.",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/chapter/10.1007/978-3-319-20889-3_50"},
                      {"from":"PDF", "url":"assets/papers/posturemonitor-_real-time_imu_wearable_technology_to_foster_poise_and_health.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., Abyarjoo, F., and O-Larnnithipong, N., \"GyroTouch: Wrist Gyroscope with a Multi-Touch Display.\" In International Conference on Human-Computer Interaction, Human-Computer Interaction: Interaction Technologies of the series Lecture Notes in Computer Science, vol. 9170, pp. 262–270, Springer International Publishing, Aug. 2015.",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/chapter/10.1007/978-3-319-20916-6_25"},
                      {"from":"PDF", "url":"assets/papers/gyrotouch-_wrist_gyroscope_with_a_multi-touch_display.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., and Abyarjoo, F., \"Multi-Touch Gesture Recognition Using Feature Extraction.\" In Innovations and Advances in Computing, Informatics, Systems Sciences, Networking and Engineering of the series Lecture Notes in Electrical Engineering, vol. 313, pp. 291–296, Springer International Publishing, 2015. ",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/chapter/10.1007/978-3-319-06773-5_39"},
                      {"from":"PDF", "url":"assets/papers/multi-touch_gesture_recognition_using_feature_extraction.pdf"}
                    ]
                  },
                  {
                    "name" : "Abyarjoo, F., Barreto, A., Cofino, J., and <b>Ortega, F.<\/b>, \"Implementing a Sensor Fusion Algorithm for 3D Orientation Detection with Inertial/Magnetic Sensors.\" In Innovations and Advances in Computing, Informatics, Systems Sciences, Networking and Engineering of the series Lecture Notes in Electrical Engineering, vol. 313, pp. 305–310, Springer International Publishing, 2015.",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/chapter/10.1007/978-3-319-06773-5_41"},
                      {"from":"PDF", "url":"assets/papers/implementing_a_sensor_fusion_algorithm_for_3d_orientation_detection_with_inertial_magnetic_sensors.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Liu, S., Hernandez, F., Barreto, A., Rishe, N., and Adjouadi, M., \"PeNTa: Multi-Touch Modeling using Petri Nets.\" In International Conference on Human-Computer Interaction, Human-Computer Interaction: Theories, Methods, and Tools of the series Lecture Notes in Computer Science, HCI International 2014), vol 8510, pages 361–372. Springer International Publishing, June 2014.",
                    "links": 
                    []
                  },
                  {
                    "name" : "Cofino, J., Barreto, A., Abyarjoo, F., and <b>Ortega, F.<\/b>, \"Sonifying HTML Tables for Audio-Spatially Enhanced Non-Visual Navigation.\" In IEEE SoutheastCon, 2013 Proceedings of IEEE, Jacksonville, FL, pp. 1–5, 2013.",
                    "links": 
                    [
                      {"from":"IEEE Xplore", "url":"http://ieeexplore.ieee.org/abstract/document/6567417/"},
                      {"from":"PDF", "url":"assets/papers/sonifying_html_tables_for_audio-spatially_enhanced_non-visual_navigation.pdf"}
                    ]
                  },
                  {
                    "name" : "Abyarjoo, F., Barreto, A., Abyarjoo, S., <b>Ortega, F.<\/b>, and Cofino, J., \"Monitoring Human Wrist Rotation in Three Degrees of Freedom.\" In IEEE SoutheastCon, 2013 Proceedings of IEEE, Jacksonville, FL, pp. 1–5, 2013.",
                    "links": 
                    [
                      {"from":"IEEE Xplore", "url":"http://ieeexplore.ieee.org/abstract/document/6567517/"},
                      {"from":"PDF", "url":"assets/papers/monitoring_human_wrist_rotation_in_three_degrees_of_freedom.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., and Adjouadi, M., \"Interaction with 3D Environments Using Multi-Touch Screens.\" In Innovations and Advances in Computer, Information, Systems Sciences, and Engineering of the series Lecture Notes in Electrical Engineering, vol. 152, pp. 381–392, CISSE. Springer, New York, 2013.",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/chapter/10.1007%2F978-1-4614-3535-8_33"},
                      {"from":"PDF", "url":"assets/papers/interaction_with_3d_environments_using_multi-touch_screens.pdf"}
                    ]
                  },
                  {
                    "name" : "Wu, Y., Hernandez, F., <b>Ortega, F.<\/b>, Clarke, P., and France, R., \"Measuring the Effort for Creating and Using Domain-Specific Models.\" In Proceedings of the 10th Workshop on Domain-Specific Modeling (DSM ’10). ACM, New York, NY, USA, article 14, pages 6, 2010.",
                    "links": 
                    [
                      {"from":"ACM", "url":"https://dl.acm.org/citation.cfm?id=2060360"},
                      {"from":"PDF", "url":"assets/papers/measuring_the_effort_for_creating_and_using_domain-specific_models.pdf"}
                    ]
                  },
                  {
                    "name" : "Verhoef, T., Lisetti, C., Barreto, A., <b>Ortega, F.<\/b>, Van der Zant, T., and Cnossen, F., \"Bio-sensing for Emotional Characterization without Word Labels.\" In Human-Computer Interaction. Ambient, Ubiquitous and Intelligent Interaction, 13th International Conference, HCI International. LNCS 5612, pp. 693–702, 2009.",
                    "links": 
                    [
                      {"from":"SPRINGER", "url":"https://link.springer.com/chapter/10.1007/978-3-642-02580-8_76"},
                      {"from":"PDF", "url":"assets/papers/bio-sensing_for_emotional_characterization_without_word_labels.pdf"}
                    ]
                  }
                ],
                "Workshop":
                [
                  {
                    "name" : "<b>Ortega, F.<\/b>, Jamides, S., Barreto, A., and Rishe, N., \"The Tabletop is dead. Long Live the Tabletop!\", to appear in The Disappearing Tabletop: Social and Technical Challenges for Cross-Surface Collaboration workshop on Interactive Surfaces and Spaces (ISS ’17).",
                    "links": 
                    []
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Bolivar, S., Bernal, J., Galvan, A., Tarre, K., Rishe, N., and Barreto, A., Twards a 3D Virtual Programming Language to Increase the Number of Women in Computer Science Education.\" In 2017 IEEE Virtual Reality Workshop on K-12 Embodied Learning through Virtual &amp; Augmented Reality (KELVAR), Los Angeles, CA. pp. 1–6.",
                    "links": 
                    [
                      {"from":"IEEE Xplore", "url":"http://ieeexplore.ieee.org/abstract/document/7961558/"},
                      {"from":"PDF", "url":"/assets/papers/towards_a_3d_virtual_programming_language_to_increase_the_number_of_women_in_computer_science_education.pdf"}
                    ]
                  },
                  {
                    "name" : "Galvan, A., <b>Ortega<\/b>, F., and Rishe, N., \"Procedural Celestial Rendering for 3D Navigation.\" In 2017 IEEE Symposium on 3D User Interfaces (3DUI), Los Angeles, CA. 2017. pp. 211–212. ",
                    "links": 
                    [
                      {"from":"IEEE Xplore", "url":"http://ieeexplore.ieee.org/abstract/document/7893346/"},
                      {"from":"PDF", "url":"/assets/papers/procedural_celestial_rendering_for_3d_navigation.pdf"}
                    ]
                  },
                  {
                    "name" : "Calella, J., <b>Ortega, F.<\/b>, Rishe, N., Barreto, A., and Bernal, J., \"HandMagic: Towards User Interaction with Inertial Measuring Units.\" In 2016 IEEE SENSORS. Orlando, FL. 2016, pp. 1-3.",
                    "links": 
                    [
                      {"from":"IEEE Xplore", "url":"http://ieeexplore.ieee.org/abstract/document/7808524/"},
                      {"from":"PDF", "url":"/assets/papers/handmagic-_towards_user_interaction_with_inertial_measuring_units.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Balcazar, R., Barreto, A., and Rishe, N., \"Smart Learning Desk: Towards an Interactive Classroom.\" In IEEE Virtual Reality 2016 Workshop on K-12 Embodied Learning through Virtual & Augmented Reality (KELVAR ’16), Mar. 2016.",
                    "links": 
                    [
                      {"from":"WEBPAGE", "url":"https://sites.google.com/site/vrkelvar/vr2016"},
                      {"from":"GOOGLE DOC", "url":"https://docs.google.com/viewer?a=v&amp;amp;pid=sites&amp;amp;srcid=ZGVmYXVsdGRvbWFpbnx2cmtlbHZhcnxneDoxZWUyMTc0YjgwNDZkYjQ4"}
                    ]
                  },
                  {
                    "name" : "Vassigh, S., Elias, A.,<b> Ortega, F.<\/b>, Davis, D., Gallardo, G., Alhaffar, H., Borges, L., Bernal, J., and Rishe, N., \"Integrating Building Information Modeling with Augmented Reality for Interdisciplinary Learning.\" In Mixed and Augmented Reality (ISMAR-Adjunct), 2016 IEEE International Symposium on, pp. 260–261, IEEE, 2016.",
                    "links": 
                    [
                      {"from":"IEEE Xplore", "url":"http://ieeexplore.ieee.org/abstract/document/7836510/"},
                      {"from":"PDF", "url":"/assets/papers/integrating_building_information_modeling_with_augmented_reality_for_interdisciplinary_learning.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., \"TAMGeF: Touch-midAir-Motion Framework for Spatial Input.\" In Proceedings of the 3rd ACM Symposium on Spatial User Interaction (SUI ’15). ACM, New York, NY, USA, pp. 136, 2015.",
                    "links": 
                    [
                      {"from":"ACM", "url":"https://dl.acm.org/citation.cfm?id=2794355"},
                      {"from":"PDF", "url":"/assets/papers/tamgef-_touch-midair-motion_framework_for_spatial_input.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., and Liu, S., \"Exploring Modeling Language for Multi-Touch Systems Using Petri Nets.\" In Proceedings of the 2013 ACM International Conference on Interactive Tabletops and Surfaces (ITS ’13), ACM, New York, NY, USA. pp. 361–364. 2013.",
                    "links": 
                    [
                      {"from":"ACM", "url":"https://dl.acm.org/citation.cfm?id=2512400"},
                      {"from":"PDF", "url":"/assets/papers/exploring_modeling_language_for_multi-touch_systems_using_petri_nets.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., and Rishe, N., \"Augmenting Multi-Touch with Commodity Devices.\" In Proceedings of the 1st Symposium on Spatial User Interaction (SUI 13). ACM, New York, NY, USA, p. 95. 2013.",
                    "links": 
                    [
                      {"from":"ACM", "url":"https://dl.acm.org/citation.cfm?id=2491399"},
                      {"from":"PDF", "url":"/assets/papers/augmenting_multi-touch_with_commodity_devices.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N. and Adjouadi, M., and Abyarjoo, F., \"Poster: Real-Time Gesture Detection for Multi-Touch Devices.\" In IEEE 8th Symposium on 3D User Interfaces, pp. 167-168. 2013.",
                    "links": 
                    []
                  },
                  {
                    "name" : "Hernandez, H.,<b> Ortega, F.<\/b>, \"Eberos GML2D: A Graphical Domain-Specific Language for Modeling 2D Video Games.\" In Proceedings of the 10th Workshop on Domain-Specific Modeling (DSM ’10). ACM, New York, NY, USA, article 4, pages 6, 2010.",
                    "links": 
                    [
                      {"from":"Citeseerx", "url":"http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.682.9199"},
                      {"from":"PDF", "url":"/assets/papers/A_Graphical_Domain-Specific_Language_for_Modeling_2D_Video_Games.pdf"}
                    ]
                  }
                ],
                "Other":
                [
                  {
                    "name" : "Aazhang, B., Abler, R. T., Allebach, J. P., Bost, L. F., Cavallaro, J. R., Chong, E. K. P., Coyle, E. J., Cullers, J. B. S., Dennis, S. M., Dong, Y., Enjeti, P. N., Filippas, A. V., Froyd, J. E., Garmire, D., George, J., Gilchrist, B. E., Hohner, G. S., Hughes, W. L., Johnson, A., Kim, C., Kim, H., Klenke, R. H., Lagoudas, M. Z., Llewellyn, D. C., Lu, Y., Lybarger, K. J., Marshall, S., Muralidharan, S., Ohta, A. T.,<b> Ortega, F. R.<\/b>, Riskin, E. A., Rizzo, D. M., Ryder, C. R., Shiroma, W. A., Siller, T. J., Sonnenberg-Klein, J., Sadjadi, S. M., Strachan, S. M., Taheri, M., Woods, G. L., Zoltowski, C. B., Fabien, B. C., Johnson, P., Collins, R., and Murray, P. \"Vertically Integrated Projects (VIP) Programs: Multidisciplinary Projects with Homes in Any Discipline\" In 2017 ASEE Annual Conference & Exposition, Columbus, Ohio. June, 2017.",
                    "links": 
                    [
                      {"from":"ASEE Peer", "url":"https://peer.asee.org/29103"}
                    ]
                  }
                ],
                "Books":
                [
                  {
                    "name" : "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., 3D Multimodal interaction: With an Input Perspective, CRC Press/AK Peters book. New York, NY. 2018.",
                    "links": 
                    []
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., Multi-Touch: Gesture Recognition, Elicitation, and More, CRC Press/AK Peters book. New York, NY. 2018.",
                    "links": 
                    []
                  },
                  {
                    "name" : "<b>Ortega, F<\/b>. Abyarjoo, F., Barreto, A., Rishe, N., and Adjouadi, M., Interaction design for 3D user interfaces: the world of modern input devices for research, applications, and game development. CRC Press/AK Peters, New York, NY, 2016.",
                    "links": 
                    []
                  }
                ],
                "BookChapters":
                [
                  {
                    "name" : "Hernandez, H.,<b> Ortega, F.<\/b>, \"Reducing Video Game Creation Effort with Eberos GML2D.\" Chapter in Game Development Tools Books edited by Marwan Y. Ansari. AK Peters/CRC Press. New York, NY, 2011.",
                    "links": 
                    []
                  }
                ],
                "NonRefeered":
                [
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., and Adjouadi, M., \"Towards 3D Data Environments Using Multi-Touch Screens.\" In ACHI 2012: The Fifth International Conference on Advances in Computer-Human Interactions, pp. 118–121, 2012.",
                    "links": 
                    [
                      {"from":"Citeseerx", "url":"http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.683.4461"},
                      {"from":"PDF", "url":"/assets/papers/towards_3d_data_environments_using_multi-touch_screens.pdf"}
                    ]
                  },
                  {
                    "name" : "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjoudi, M., and Abyarjoo, F., \"GyroTouch: Complementing the Multi-Touch Display.\" In ACM Richard Tapia Celebration of Diversity in Computing, 2014.",
                    "links": 
                    [
                      {"from":"Citeseerx", "url":"http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.707.8806"},
                      {"from":"PDF", "url":"/assets/papers/gyrotouch-_complementing_the_multi-touch_display.pdf"}
                    ]
                  },
                  {
                    "name" : "Cofino, J., Barreto, A., Abyarjoo, F., and <b>Ortega, F.<\/b>, \"B.A.S.S. Blind-Assistive Spatialized Screen-reading.\" In ACM Richard Tapia Celebration of Diversity in Computing, 2014.",
                    "links": 
                    [
                      {"from":"FIU Digital Commons", "url":"http://digitalcommons.fiu.edu/etd/1570/"}
                    ]
                  }
                ]
              }
        );
    }
}